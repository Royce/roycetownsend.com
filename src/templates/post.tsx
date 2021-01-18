/** @jsx jsx */
import * as React from 'react';
import { graphql } from 'gatsby';
import { jsx, Styled } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from 'src/components/layout';
import { TagList } from 'src/components/TagList';
import { PostQuery } from 'src/graphql';

const PostPage: React.FC<{ data: PostQuery }> = ({ data }) => {
  const post = data.blogPost;
  return (
    <Layout>
      <Styled.h1>{post.title}</Styled.h1>
      <MDXRenderer>{post.body}</MDXRenderer>
      <TagList tags={post.tags} />
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
      tags {
        name
        slug
      }
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
