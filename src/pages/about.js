import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './about.css';
import Footer from '../components/Footer';
import CV from '../assets/cv/Mihail_Gaberov_Resume_Feb_2019.pdf';

export default () => (
  <Layout>
    <SEO />
    <h1>About Me</h1>
    <p>
      There is one phrase I really like and it describes me and my way of
      thinking very well.
    </p>
    <i>
      <blockquote>
        If you want to really learn something, try teaching it to someone else.
      </blockquote>
    </i>
    <ul>
      <li className="about-me-bullet">
        <h3>Who I am</h3>
        <p>
          My name is <span className="accent">Mihail Gaberov</span> and I am a{' '}
          <span className="accent">
            Lead Software Engineer / Senior Front-End Developer
          </span>
          .
        </p>
      </li>
      <li className="about-me-bullet">
        <h3>What I do</h3>
        <p>
          Professionally I am focused mainly on developing web sites and
          applications. Currently working mostly with{' '}
          <a href="https://reactjs.org/" target="_blank">
            React
          </a>
          ,{' '}
          <a href="https://redux.js.org/" target="_blank">
            Redux
          </a>{' '}
          and/or pure{' '}
          <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
            Javascript
          </a>{' '}
          or{' '}
          <a href="http://www.typescriptlang.org/index.html" target="_blank">
            TypeScript
          </a>
          . Essential knowledge of{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            target="_blank"
          >
            HTML5
          </a>
          /
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
            target="_blank"
          >
            CSS3
          </a>
          (
          <a href="https://sass-lang.com/" target="_blank">
            SASS
          </a>
          /
          <a href="http://lesscss.org/" target="_blank">
            LESS
          </a>
          )/
          <a href="https://en.wikipedia.org/wiki/ECMAScript" target="_blank">
            JS(ES6/ES7)
          </a>
          . Previous experience with{' '}
          <a href="https://angularjs.org/" target="_blank">
            AngularJS
          </a>{' '}
          (both JS and Typescript versions) and{' '}
          <a href="https://aurelia.io/" target="_blank">
            Aurelia
          </a>{' '}
          (previously called Durandal) front-end frameworks. Besides that, I
          like digging into everything new - technologies, frameworks, tools,
          etc.
        </p>
      </li>
      <li className="about-me-bullet">
        <h3>More about me</h3>
        <p>
          Here you can{' '}
          <a href={CV}>
            check out my CV
          </a>
          , where my professional experience is described.
        </p>
        <p>
          Here you can{' '}
          <a href="https://www.linkedin.com/in/mihail-gaberov-6a73b03a/">
            check out my LinkedIn
          </a>{' '}
          account, where you also can take a look at my professional life.
        </p>
        <p>
          Here you can{' '}
          <a href="https://github.com/mihailgaberov">check out my GitHub</a>{' '}
          account, where most of my pet projects live.
        </p>
        <p>
          Here you can{' '}
          <a href="https://mobile.twitter.com/mihailgaberov">
            check out my Twitter
          </a>{' '}
          account, where I publish my (or others) thoughts, I find interesting.
        </p>
        <p>
          Here you can{' '}
          <a href="https://medium.com/@mihailgaberov">check out my Medium</a>{' '}
          account, where my articles are published.
        </p>
      </li>
      <li>
        <i>If you wish to contact me, just send me an email to</i>{' '}
        <a href="mailto:mihail.gaberov@gmail.com">
          mihail.gaberov[at]gmail.com
        </a>{' '}
        or <a href="mailto:mihail.gaberov@zoho.com">mihail.gaberov[at]zoho.com</a>
      </li>
    </ul>
    <Footer />
  </Layout>
);
