/** @jsx jsx */
import * as React from 'react';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import { PostQuery } from '../graphql';

const PostPage: React.FC<{ data: PostQuery }> = ({ data }) => {
  const post = data.blogPost;
  return (
    <Layout>
      <h1>{post.title}</h1>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
};

export default PostPage;

export const query = graphql`
  query Post(
    $id: String!
    $previousId: String
    $nextId: String
    $maxWidth: Int
  ) {
    blogPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      tags
      date(formatString: "MMMM DD, YYYY")
      image {
        childImageSharp {
          fluid(maxWidth: $maxWidth) {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
      imageAlt
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;
