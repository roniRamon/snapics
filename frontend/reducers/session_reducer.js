import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _currentUser = {
  currentUser: null
};

const sessionReducer = (state = _currentUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser.user};
    default:
      return state;
  }
};


export default sessionReducer;
