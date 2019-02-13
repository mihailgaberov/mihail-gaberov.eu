import { css } from "@emotion/core"
import React from 'react';
import Bio from "../components/Bio"
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import SEO from "../components/SEO"
import { rhythm } from '../utils/typography';
import Signup from "../components/Signup"

const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
      />
      <main>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        </div>
      </main>
      <aside>
        <div
          style={{
            margin: '90px 0 40px 0',
            fontFamily: systemFont,
          }}
        >
          <Signup/>
        </div>
        <h3>
          <Link css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              text-decoration: none;
              font-style: normal;
              color: black;
              :hover {
                color: #9f392b;
              }
            `}
                to={'/'}
          >
            {data.site.siteMetadata.title}
          </Link>
        </h3>
        <Bio/>
      </aside>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
   site {
          siteMetadata {
            title
          }
        }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
