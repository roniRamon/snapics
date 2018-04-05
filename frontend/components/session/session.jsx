import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/fontawesome-free-solid';

// export default ({ currentUser, logout }) => {
class Session extends React.Component {
  constructor(props){
    super(props);

    this.display = this.display.bind(this);
  }

  display() {
    const {currentUser, logout} = this.props;
    return (
      currentUser ? (
        <ul>
          <li className="logout-button">
            <button onClick={logout} >
              Logout
            </button>
          </li>
          <li>Hi, {currentUser.username}</li>
          <li className="upload-icon">
            <FontAwesomeIcon icon={faCloudUploadAlt} />
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
      )
    );
  }

render (){
  return (
      <nav className={this.props.currentUser ? "nav-login" : "nav-not-login"}>
        <span>
          <h1>SnaPics</h1>
          {this.display()}
        </span>
      </nav>
  );
}

}

export default Session;
