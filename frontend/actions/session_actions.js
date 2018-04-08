import * as ApiSessionUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionError = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const signin = user => dispatch => (
  ApiSessionUtil.signin(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const signup = user => dispatch => (
  ApiSessionUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const logout = () => dispatch => (
  ApiSessionUtil.logout().then(
    currentUser => dispatch(receiveCurrentUser(null))
  )
);

export const fetchUser = (userId) => dispatch => (
  ApiSessionUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user))
  )
);
