import { css } from '@emotion/core';
import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>Not Found</h1>
          <p>I haven’t written this post yet. Will you help me write it?</p>
          <p>
            Send me a message to{' '}
            <a href="mailto:mihail.gaberov@gmail.com" type="email">
              mihail.gaberov[at]gmail.com
            </a>
          </p>
          <p
            css={css`
              text-align: center;
            `}
          >
            Благодаря много!
            <br /> Thanks a lot!
            <br /> Danke viel mal!
            <br /> Merci beaucoup!
            <br /> Muchas gracias!
            <br /> Muito obrigado!
          </p>
        </main>
      </Layout>
    );
  }
}

export default NotFoundPage;
