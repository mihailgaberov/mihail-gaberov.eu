import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div data-test="bio" style={{ display: 'flex', marginBottom: rhythm(2) }}>
        <img
          data-test="profile-pic"
          src={profilePic}
          alt={`Mihail Gaberov`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by{' '}
          <a
            href="https://www.linkedin.com/in/mihail-gaberov-6a73b03a/"
            target="_blank" rel="noopener noreferrer"
          >
            Mihail Gaberov
          </a>
          . Learning by sharing.
        </p>
      </div>
    );
  }
}

export default Bio;
