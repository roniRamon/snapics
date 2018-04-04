import React from 'react';
import { Link } from 'react-router-dom';

const userNotSignIn = () => (
    <ul>
      <li>
        <Link to='/signin'>Log In</Link>
      </li>
      <li className="signup-button">
        <Link to='/signup'>Sign Up</Link>
      </li>
    </ul>
  );

  const userIsSignIn = (currentUser, logout) => (
    <ul>
      <li>Hi, {currentUser.username}</li>
      <li className="logout-button">
        <button onClick={logout} >
          Logout
        </button>
      </li>
    </ul>
  );

const Session = ({currentUser, logout}) => (
  currentUser ? userIsSignIn(currentUser, logout) : userNotSignIn()
);

export default Session;
