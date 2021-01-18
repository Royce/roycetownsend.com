/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { ProfileImageQuery } from '../graphql';

export default function ProfileImage(): JSX.Element {
  const data: ProfileImageQuery = useStaticQuery(graphql`
    query ProfileImage {
      file(relativePath: { eq: "royce-dancing-bw.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const height = '30vh';
  return (
    <>
      <Box sx={{ height: [height, 0] }} />
      <Img
        style={{ position: ['absolute', 'relative'] }}
        fluid={data.file.childImageSharp.fluid}
        alt="A Royce dancing happilly."
        sx={{
          position: ['absolute', 'relative'],
          top: [0, 'auto'],
          left: [0, 'auto'],
          right: [0, 'auto'],
          height: [height, '20em'],
          width: ['auto', '50%'],
          ml: [0, 4],
          float: ['none', 'right'],
        }}
      />
    </>
  );
}
