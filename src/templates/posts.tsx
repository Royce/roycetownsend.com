/** @jsx jsx */
import { graphql, Link, useStaticQuery } from 'gatsby';
import { jsx, Styled } from 'theme-ui';

import Layout from 'src/components/layout';
import { PostsQuery } from 'src/graphql';

const PostListPage: React.FC = () => {
  const data: PostsQuery = useStaticQuery(graphql`
    query Posts {
      allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
        nodes {
          id
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  `);

  const posts = data.allBlogPost.nodes;

  return (
    <Layout>
      <ul
        sx={{
          listStyle: `none`,
          display: `grid`,
          gap: 3,
          gridTemplateColumns: `repeat(auto-fit, minmax(256px, 1fr))`,
          m: 0,
          px: 3,
          py: 4,
        }}
      >
        {posts.map((post) => (
          <li key={post.id} sx={{}}>
            <Styled.h2
              sx={{
                m: 0,
              }}
            >
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
            <Styled.p
              sx={{
                m: 0,
              }}
            >
              {post.excerpt}
            </Styled.p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default PostListPage;

// export const query = graphql`
//   query Posts {
//     allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
//       nodes {
//         id
//         excerpt
//         slug
//         title
//         date(formatString: "MMMM DD, YYYY")
//         tags
//       }
//     }
//   }
// `;
