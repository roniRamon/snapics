import React from 'react';
import { connect } from 'react-redux';
import { signin, clearSessionError } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.login,
  formType: "Sign In",
  navLink: <Link to='/signup'>Sign Up</Link>,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signin(user)),
  clearErrors: () => dispatch(clearSessionError()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
