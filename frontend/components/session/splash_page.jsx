import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import GreetingContainer from '../greeting/greeting_container';
import SessionContainer from './session_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

export default ()=> (
  <div className="homePage-background-image">
    <Route path="/" component={GreetingContainer} />
    <Route path="/signin" component={ LoginFormContainer } />
    <Route path="/signup" component={ SignupFormContainer } />
  </div>
);
