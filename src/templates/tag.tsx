/** @jsx jsx */
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Grid, jsx, Styled } from 'theme-ui';
import toSlug from 'slugify';

import Layout from 'src/components/layout';
import { PostsForTagQuery } from 'src/graphql';

const PostForTagListPage: React.FC<{ data: PostsForTagQuery }> = ({ data }) => {
  const posts = data.allBlogPost.nodes;
  const tag = data.blogTag;

  return (
    <Layout>
      <Styled.h1># {tag.name}</Styled.h1>
      <Grid
        as="ul"
        gap={4}
        columns={[1, 2]}
        sx={{ listStyle: `none`, m: 0, px: 0, py: 4 }}
      >
        {posts.map((post) => (
          <li key={post.id} sx={{}}>
            <Styled.h2 sx={{ m: 0 }}>
              <Link
                to={post.slug}
                sx={{
                  color: `inherit`,
                  textDecoration: `none`,
                  ':hover,:focus': {
                    color: `primary`,
                    textDecoration: `underline`,
                  },
                }}
              >
                {post.title}
              </Link>
            </Styled.h2>
            <small sx={{ fontWeight: `bold` }}>{post.date}</small>
            <Styled.p sx={{ m: 0 }}>{post.excerpt}</Styled.p>
          </li>
        ))}
      </Grid>
      <Styled.p sx={{ fontSize: 0, color: 'muted' }}>
        {posts.length} Result{posts.length !== 1 && 's'} for {toSlug(tag.name)}
      </Styled.p>
    </Layout>
  );
};

export default PostForTagListPage;

export const query = graphql`
  query PostsForTag($id: String!) {
    blogTag(id: { eq: $id }) {
      name
      slug
    }
    allBlogPost(
      filter: { tags: { elemMatch: { id: { eq: $id } } } }
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
