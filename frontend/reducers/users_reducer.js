import { RECEIVE_PHOTO } from '../actions/photos_actions';
import { RECEIVE_USER } from '../actions/session_actions';
import { merge } from 'lodash';


const userReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_PHOTO:
      newState = merge({}, state);
      newState[action.photo.user.id] = action.photo.user;
      return newState;
    default:
      return state;

  }
};

export default userReducer;
