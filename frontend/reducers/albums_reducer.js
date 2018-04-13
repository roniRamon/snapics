import { RECEIVE_ALBUM,  REMOVE_ALBUM } from '../actions/albums_actions';
import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_PHOTO } from '../actions/photos_actions';
import { merge } from 'lodash';


const albumReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge( {}, state, action.photo.albums);
    case RECEIVE_ALBUM:
      newState = merge({}, state);
      newState[action.album.id] = action.album;
      return newState;
    case REMOVE_ALBUM:
       newState = merge({}, state);
      delete newState[action.albumId];
      return newState;
    case RECEIVE_USER:
      newState = merge({}, state, action.user.albums);
      return newState;
    default:
      return state;

  }
};


export default albumReducer;
