import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          © Mihail Gaberov 2020. All rights reserved.
        </div>
        <a
          href="https://mobile.twitter.com/mihailgaberov"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/mihailgaberov"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </footer>
    );
  }
}

export default Footer;
