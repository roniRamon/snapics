import { RECEIVE_ALL_PHOTOS,
         RECEIVE_PHOTO,
         REMOVE_PHOTO} from '../actions/photos_actions';
import {REMOVE_COMMENT} from '../actions/comments_actions';
import { merge } from 'lodash';


const photoReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, state, action.photos);
    case RECEIVE_PHOTO:
      newState = merge({}, state);
      newState[action.photo.photo.id] = action.photo.photo;
      return newState;
    case REMOVE_PHOTO:
       newState = merge({}, state);
      delete newState[action.photoId];
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      let array = newState[action.comment.photoId].comments.filter( comment => comment !== action.comment.id);
      newState[action.comment.photoId].comments = array;
      return newState;
    default:
      return state;

  }
};

export default photoReducer;
