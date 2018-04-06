import { RECEIVE_PHOTO } from '../actions/photos_actions';
import { merge } from 'lodash';


const userReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PHOTO:
      newState = merge({}, state);
      newState[action.photo.user.id] = action.photo.user;
      return newState;
    default:
      return state;

  }
};

export default userReducer;
