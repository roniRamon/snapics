import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedinIn,
  faGithub
 } from '@fortawesome/fontawesome-free-brands';


export default () => {
  return (
      <footer>
        <div>
          <a href="https://www.facebook.com/roni.ramon.75" >
            <FontAwesomeIcon
              icon={faFacebook}
              className="facebook-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/roni-ramon-69531410a/">
            <FontAwesomeIcon
              icon={faLinkedinIn }
              className="linkedin-icon"/>
          </a>
          <a href="https://github.com/roniRamon">
            <FontAwesomeIcon
              icon={faGithub }
              className="faGithub-icon"/>
          </a>
        </div>
      </footer>
  );
};
