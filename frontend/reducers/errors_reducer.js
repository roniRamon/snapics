import  { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import photosErrorsReducer from './photos_errors_reducer';
import albumsErrorsReducer from './albums_errors_reducer';

const errorsReducer = combineReducers({
  login: sessionErrorsReducer,
  photos: photosErrorsReducer,
  albums: albumsErrorsReducer,
});

export default errorsReducer;
