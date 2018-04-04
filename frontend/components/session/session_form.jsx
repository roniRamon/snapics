import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillUnmount () {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillMount () {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if(this.node.contains(e.target)){
      return;
    }

    this.handleClickOutside();
  }

  handleClickOutside() {
    this.props.history.push("/");
  }


  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => (
      this.setState({ [type]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(
      res => this.props.history.push('/')
    );
  }


  renderErrors(){
    return (
      <div className="err-messages">
        {
          this.props.errors.map( (err, index) => (
            <p key={`err-${index}`}>{err}</p>
        ))
        }
      </div>
    );
  }

  render() {
    return (
        <div className="form-sign-container" ref={ (node) => (this.node = node) }>
          <h2>{this.props.formType}</h2>
          <form onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInput('username')}
                  id="username"
                  />
              </li>
              <li>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                  id="email"
                  />
              </li>
              <li>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                  id="password"
                  />
              </li>
            </ul>
            {this.renderErrors()}

            <input type="submit" value={this.props.formType} />
            <p>
            Go Back to
            <button> {this.props.navLink}</button>
            </p>
          </form>
        </div>
    );
  }
}

export default withRouter(SessionForm);
