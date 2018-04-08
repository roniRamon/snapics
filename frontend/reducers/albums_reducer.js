import { RECEIVE_ALBUM,  REMOVE_ALBUM } from '../actions/albums_actions';
import { merge } from 'lodash';


const albumReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUM:
      newState = merge({}, state);
      newState[action.album.id] = action.album;
      return newState;
    case REMOVE_ALBUM:
       newState = merge({}, state);
      delete newState[action.albumId];
      return newState;
    default:
      return state;

  }
};


export default albumReducer;
