import { RECEIVE_TAGS, REMOVE_TAG } from '../actions/tags_actions';
import { RECEIVE_PHOTO } from '../actions/photos_actions';
import { merge } from 'lodash';

const tagsReducer = ( state={}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge( {}, state, action.photo.tags);
    case RECEIVE_TAGS:
        return merge( {}, state, action.tags);
    case REMOVE_TAG:
      newState[action.tagId];
      return newState;
    default:
      return state;
  }

};


export default tagsReducer;
