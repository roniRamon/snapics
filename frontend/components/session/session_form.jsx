import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
      <p>
        {
          this.props.errors.map( (err, index) => (
            <small key={`err-${index}`}>{err}</small>
        ))
        }
        </p>
    );
  }

  render() {
    return (
      <div className="form-sign-container">
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              />
          </label>
          <br/>
          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              />
          </label>
          <br/>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>
          {this.renderErrors()}
          <br/>
          <input type="submit" value={this.props.formType} />
          <p>
          Or go Back to
          <button>{this.props.navLink}</button>
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
