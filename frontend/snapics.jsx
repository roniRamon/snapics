import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {signin} from './actions/session_actions';
import { fetchAllPhotos } from './actions/photos_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  if(window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser.user} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //FOR TEST
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllPhotos = fetchAllPhotos;
  // window.dispatch(signin({username: "roni1", password: "123456"}));
  //END OF TEST

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store}/>,
    root
    );
});
