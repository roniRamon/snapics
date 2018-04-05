import React from 'react';
import SessionContainer from './session/session_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SplashPage from './session/splash_page';
import PhotoIndexContainer from './photos/photos_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Route path="/" component={SessionContainer} />
    <Switch>
      <ProtectedRoute exact path="/explore" component={PhotoIndexContainer}/>
      <AuthRoute path="/" component={SplashPage} />
    </Switch>
  </div>
);

export default App;

//  <GreetingContainer />
// <Route path="/" component={SessionContainer} />
//
//   <AuthRoute exact path="/signin" component={ LoginFormContainer } />
//   <AuthRoute exact path="/signup" component={ SignupFormContainer } />

  // <Route path="/" component={SessionContainer} />
  // <AuthRoute path="/" component={GreetingContainer} />
  // <ProtectedRoute exact path="/explore" component={PhotoIndexContainer}/>
  // <AuthRoute exact path="/signin" component={ LoginFormContainer } />
  // <AuthRoute exact path="/signup" component={ SignupFormContainer } />
