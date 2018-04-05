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
import PhotoIndexContainer from './photos/photos_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <Route path="/" component={SessionContainer} />
      <AuthRoute path="/" component={GreetingContainer} />
      <ProtectedRoute exect path="/explore" component={PhotoIndexContainer}/>
      <AuthRoute exact path="/signin" component={ LoginFormContainer } />
      <AuthRoute exact path="/signup" component={ SignupFormContainer } />
  </div>
);

export default App;

//  <GreetingContainer />
