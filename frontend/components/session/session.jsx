import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <ul>
      <li>Hi, {currentUser.username}</li>
      <li className="logout-button">
        <button onClick={logout} >
          Logout
        </button>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <Link to='/signin'>Log In</Link>
      </li>
      <li className="signup-button">
        <Link to='/signup'>Sign Up</Link>
      </li>
    </ul>

  );

  return (
      <nav>
        <span>
          <h1>SnaPics</h1>
          {display}
        </span>
      </nav>
  );
};
