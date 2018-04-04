import React from 'react';
import SessionContainer from './session/session_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <nav>
      <span>
        <h1>SnaPics</h1>
        <SessionContainer />
      </span>
    </nav>

    <GreetingContainer />

    <Switch>
      <AuthRoute exact path="/signin" component={ LoginFormContainer } />
      <AuthRoute exact path="/signup" component={ SignupFormContainer } />
    </Switch>
  </div>
);

export default App;

// <Route exact path="/" component={ SessionContainer } />
