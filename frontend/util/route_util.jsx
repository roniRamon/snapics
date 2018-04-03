import React from 'react';
import {
  Route,
  Redirect,
  HashRouter,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';


const Auth = ({component: Component, path, loggedIn, exect}) => (
  <Route path={path} exect={exect} rebder={ (props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
  )} />
);


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
});

export const AuthRoute = withRouter(connect(
  mapStateToProps, null)(Auth));
