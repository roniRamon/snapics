import React from 'react';
import { Link } from 'react-router-dom';

const userNotSignIn = () => (
    <ul>
      <li>
        <Link to='/signup'>Sign Up</Link>
      </li>
      <li>
        <Link to='/signin'>Sign In</Link>
      </li>
    </ul>
  );

  const userIsSignIn = (currentUser, logout) => (
    <ul>
      <li>Hi, {currentUser.username}</li>
      <li>
        <button onClick={logout}>
          Logout
        </button>
      </li>
    </ul>
  );

const Session = ({currentUser, logout}) => (
  currentUser ? userIsSignIn(currentUser, logout) : userNotSignIn()
);

export default Session;
