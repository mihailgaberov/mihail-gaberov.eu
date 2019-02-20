import { css } from '@emotion/core';
import React from 'react';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';
import Signup from '../components/Signup';

const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`;

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  let {
    previous,
    next,
    slug
  } = pageContext;

  const GITHUB_USERNAME = 'mihailgaberov';
  const GITHUB_REPO_NAME = 'mihail-gaberov.eu';
  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${slug.slice(1, slug.length - 1)}/index.md`;
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://mihail-gaberov.eu${slug}`)}`;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.spoiler}
        slug={post.fields.slug}
      />
      <main>
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer>
            <p>
              <a href={discussUrl} target="_blank" rel="noopener noreferrer">
                Discuss on Twitter
              </a>
              {` • `}
              <a href={editUrl} target="_blank" rel="noopener noreferrer">
                Edit on GitHub
              </a>
            </p>
          </footer>
        </article>
      </main>
      <aside>
        <div
          style={{
            margin: '90px 0 40px 0',
            fontFamily: systemFont,
          }}
        >
          <Signup slug={post.fields.slug} />
        </div>
        <h3>
          <Link
            css={css`
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
        <Bio />
      </aside>
      <nav>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
      fields {
        slug
      }
    }
  }
`;
