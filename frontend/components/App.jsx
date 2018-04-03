import React from 'react';
import SessionContainer from './session/session_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <nav>
      <h1>SnaPics</h1>
      <SessionContainer />

    </nav>

    <AuthRoute path="/signin" component={ LoginFormContainer } />
    <AuthRoute path="/signup" component={ SignupFormContainer } />
  </div>
);

export default App;

// <Route exact path="/" component={ SessionContainer } />
