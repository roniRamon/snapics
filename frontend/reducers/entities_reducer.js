import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import photoReducer from './photos_reducer';
import userReducer from './users_reducer';
import albumReducer from './albums_reducer';
import commentsReducer from './comments_reducer';
import tagsReducer from './tags_reducer';

export default combineReducers({
  photos: photoReducer,
  users: userReducer,
  albums: albumReducer,
  comments: commentsReducer,
  tags: tagsReducer,
});
