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
          <Link to="https://www.facebook.com/roni.ramon.75" >
            <FontAwesomeIcon
              icon={faFacebook}
              className="facebook-icon"/>
          </Link>
          <Link to="https://www.linkedin.com/in/roni-ramon-69531410a/">
            <FontAwesomeIcon
              icon={faLinkedinIn }
              className="linkedin-icon"/>
          </Link>
          <Link to="https://github.com/roniRamon">
            <FontAwesomeIcon
              icon={faGithub }
              className="faGithub-icon"/>
          </Link>
        </div>
      </footer>
  );
};
