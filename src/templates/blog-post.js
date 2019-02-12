import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import SEO from "../components/SEO"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
      />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
