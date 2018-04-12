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
          <Link to="/" >
            <FontAwesomeIcon
              icon={faFacebook}
              className="facebook-icon"/>
          </Link>
          <Link to="/">
            <FontAwesomeIcon
              icon={faLinkedinIn }
              className="linkedin-icon"/>
          </Link>
          <Link to="/">
            <FontAwesomeIcon
              icon={faGithub }
              className="faGithub-icon"/>
          </Link>
        </div>
      </footer>
  );
};
