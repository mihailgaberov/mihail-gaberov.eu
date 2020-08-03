import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './about.css';
import Footer from '../components/Footer';
import CV from '../assets/curriculum-vitae/Mihail_Gaberov_Resume_Aug_2020.pdf';

export default () => (
  <Layout>
    <SEO/>
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
        <p>Currently my main focus is on developing responsive web applications that run well on both desktop and mobile
          devices.</p>
        <p>
          But my interests and curiosity are endless. Here is a list with of programming languages and technologies I
          have proficiency with,
          I have been playing with or I have at least touched in my past experience. Ordering is based on recent
          usage:</p>
        <ul>
          <li><strong>Programming languages:</strong> TypeScript, JavaScript/Node.js, HTML, CSS/SASS, Python, PHP,
            ActionScript 3.0/2.0, C#, Java/JSP/Java Servlets, VB .NET
          </li>
          <li><strong>Frameworks:</strong> React.js, Vue.js, AngularJS, Redux, Moment.js, date-fns, Redux Thunk, Jest,
            Mocha, Chai, Aurelia, Flux, Saga, jQuery, MaterialUI, Jasmine, SinonJS, BackboneJS, Bootstrap, Foundation
          </li>
          <li><strong>Databases:</strong> MongoDB, MySQL, MSSQL, PL/SQL</li>
        </ul>

        <p>I have gained experience in a variety of industries, such as: online gaming/gambling, financial/banking,
          eCommerce, environmental and legal property data gathering, analyzing and processing.</p>

        <p>I also like to share what I learn in my <a href="https://mihail-gaberov.eu">blog</a>, so I can really learn it.</p>
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
          <a href="https://www.linkedin.com/in/mihail-gaberov-6a73b03a/" rel="noopener noreferrer" target="_blank">
            check out my LinkedIn
          </a>{' '}
          account, where you also can take a look at my professional life.
        </p>
        <p>
          Here you can{' '}
          <a href="https://github.com/mihailgaberov" target="_blank" rel="noopener noreferrer">check out my
            GitHub</a>{' '}
          account, where most of my pet projects live.
        </p>
        <p>
          Here you can{' '}
          <a href="https://mobile.twitter.com/mihailgaberov" target="_blank" rel="noopener noreferrer">
            check out my Twitter
          </a>{' '}
          account, where I publish my (or others) thoughts, I find interesting.
        </p>
        <p>
          Here you can{' '}
          <a href="https://www.freecodecamp.org/news/author/mihail/" target="_blank" rel="noopener noreferrer">check out
            my freeCodeCamp</a>{' '}
          account, where my articles are published.
        </p>
      </li>
      <li>
        <i>If you wish to contact me, just send me an email to</i>{' '}
        <a href="mailto:mihail.gaberov@gmail.com">
          mihail.gaberov[at]gmail.com
        </a>
      </li>
    </ul>
    <Footer/>
  </Layout>
);
