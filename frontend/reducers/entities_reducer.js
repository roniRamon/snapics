import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import photoReducer from './photos_reducer';
import userReducer from './users_reducer';


export default combineReducers({
  photos: photoReducer,
  users: userReducer,
});
