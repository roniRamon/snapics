import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import photoReducer from './photos_reducer';


export default combineReducers({
  photos: photoReducer,
});
