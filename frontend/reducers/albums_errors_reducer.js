import { RECEIVE_ALBUM_ERRORS,
          CLEAR_ALBUM_ERRORS } from '../actions/albums_actions';
import { merge } from 'lodash';

const albumsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return [...action.errors];
    case CLEAR_ALBUM_ERRORS:
      return [];
    default:
      return state;
  }
};


export default albumsErrorsReducer;
