import { RECEIVE_PHOTO_ERRORS,
         CLEAR_PHOTO_ERRORS } from '../actions/photos_actions';
import { merge } from 'lodash';


const photosErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return [...action.errors];
    case CLEAR_PHOTO_ERRORS:
      return [];
    default:
      return state;
  }
};


export default photosErrorsReducer;
