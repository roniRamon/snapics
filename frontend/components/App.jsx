import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Footer from './session/footer';
import SessionContainer from './session/session_container';
import SplashPage from './session/splash_page';
import PhotoIndexContainer from './photos/photos_index_container';
import PhotoShowContainer from './photos/photo_show_container';
import ProfileContainer from './profile/profile_container';
import AlbumsIndexContainer from './albums/albums_index_container';
import AlbumShowContainer from './albums/album_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className="div-routes">
    <Route path="/" component={SessionContainer} />

    <Switch>
      <ProtectedRoute path="/profile/:userId/" component={ProfileContainer}/>
      <ProtectedRoute path="/album/:albumId" component={AlbumShowContainer}/>
      <ProtectedRoute exact path="/explore" component={PhotoIndexContainer}/>
      <ProtectedRoute exact path="/photo/:photoId" component={PhotoShowContainer}/>
      <AuthRoute path="/" component={SplashPage} />
    </Switch>

    <Footer />

  </div>
);

export default App;
