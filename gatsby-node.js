const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`);
const { urlResolve, createContentDigest, slash } = require(`gatsby-core-utils`);

const PostTemplate = path.resolve(`./src/templates/post.tsx`);
const PostsTemplate = path.resolve(`./src/templates/posts.tsx`);

const basePath = '/blog/';
const contentPath = 'content/posts';
const assetPath = 'content/assets';
const imageMaxWidth = 896;
const excerptLength = 110;

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: require.resolve('./node_modules/react'),
        'react-dom': require.resolve('./node_modules/react-dom'),
      },
    },
  });
};

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

const mdxResolverPassthrough = (fieldName) => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  });
  return result;
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  createTypes(`interface BlogPost @nodeInterface {
      id: ID!
      title: String!
      body: String!
      slug: String!
      redirectFrom: [String]!
      date: Date! @dateformat
      tags: [String]!
      excerpt: String!
      image: File
      imageAlt: String
  }`);

  createTypes(
    schema.buildObjectType({
      name: `MdxBlogPost`,
      fields: {
        id: { type: `ID!` },
        title: {
          type: `String!`,
        },
        slug: {
          type: `String!`,
        },
        tags: { type: `[String]!` },
        date: { type: `Date!`, extensions: { dateformat: {} } },
        redirectFrom: { type: `[String]!` },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: excerptLength,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        image: {
          type: `File`,
          resolve: async (source, args, context) => {
            if (source.image___NODE) {
              return context.nodeModel.getNodeById({ id: source.image___NODE });
            } else if (source.image) {
              return processRelativeImage(source, context, `image`);
            }
          },
        },
        imageAlt: {
          type: `String`,
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`, `BlogPost`],
      extensions: {
        infer: false,
      },
    })
  );
};

function processRelativeImage(source, context, type) {
  // Image is a relative path - find a corresponding file
  const mdxFileNode = context.nodeModel.findRootNodeAncestor(
    source,
    (node) => node.internal && node.internal.type === `File`
  );
  if (!mdxFileNode) {
    return;
  }
  const imagePath = slash(path.join(mdxFileNode.dir, source[type]));

  const fileNodes = context.nodeModel.getAllNodes({ type: `File` });
  for (const file of fileNodes) {
    if (file.absolutePath === imagePath) {
      return file;
    }
  }
}

function validURL(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  store,
  cache,
}) => {
  const { createNode, createParentChildLink } = actions;

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (node.internal.type === `Mdx` && source === contentPath) {
    let slug;
    if (node.frontmatter.slug) {
      if (path.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug;
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(basePath, node.frontmatter.slug);
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: contentPath,
      });

      slug = urlResolve(basePath, filePath);
    }
    // normalize use of trailing slash
    slug = slug.replace(/\/*$/, `/`);

    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      slug,
      redirectFrom: node.frontmatter.redirectFrom || [],
      date: node.frontmatter.date,
      image: node.frontmatter.image,
    };

    if (validURL(node.frontmatter.image)) {
      // create a file node for image URLs
      const remoteFileNode = await createRemoteFileNode({
        url: node.frontmatter.image,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
      });
      // if the file was created, attach the new node to the parent node
      if (remoteFileNode) {
        fieldData.image___NODE = remoteFileNode.id;
      }
    }

    const mdxBlogPostId = createNodeId(`${node.id} >>> MdxBlogPost`);
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxBlogPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxBlogPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the BlogPost interface`,
      },
    });
    createParentChildLink({ parent: node, child: getNode(mdxBlogPostId) });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  const result = await graphql(`
    {
      allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
        nodes {
          id
          slug
          redirectFrom
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  // Create Posts and Post pages.
  const { allBlogPost } = result.data;
  const posts = allBlogPost.nodes;
  const redirects = [];

  // Create a page for each Post
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];
    const { slug, redirectFrom } = post;
    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        id: post.id,
        previousId: previous ? previous.id : undefined,
        nextId: next ? next.id : undefined,
        maxWidth: imageMaxWidth,
      },
    });
    redirects.push({
      from: redirectFrom,
      to: slug,
    });
  });

  // // Create the Posts page
  createPage({
    path: basePath,
    component: PostsTemplate,
    context: {},
  });

  // Create redirects from the just constructed array
  redirects.forEach(({ from, to }) => {
    // iterate through all `from` array items
    from.forEach((from) => {
      createRedirect({
        fromPath: from,
        toPath: to,
        isPermanent: true,
        redirectInBrowser: true,
      });
    });
  });
};
