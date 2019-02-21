import { css } from '@emotion/core';
import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import { rhythm } from '../utils/typography';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <Link data-test="logo" to={`/`}>
          <h3
            css={css`
              margin-bottom: ${rhythm(0.5)};
              display: inline-block;
              font-style: normal;
              :hover {
                color: #9f392b;
              }
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about/`}
          css={css`
            float: right;
          `}
        >
          About
        </Link>
        <hr data-test="separator" />
        {children}
      </div>
    )}
  />
);
