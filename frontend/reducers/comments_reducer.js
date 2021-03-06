import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comments_actions';
import { RECEIVE_PHOTO } from '../actions/photos_actions';
import { merge } from 'lodash';

const commentsReducer = ( state={}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge( {}, state, action.photo.comments);
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }

};


export default commentsReducer;
