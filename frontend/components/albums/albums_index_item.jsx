import React from 'react';
import { Link } from 'react-router-dom';


export default ({album}) => (
  <Link to={`/album/${album.id}`}>
  <li className="user-album-cover">
    <p>
      <span className="user-album-cover-title">
        {album.title} <br />
      </span>
      {album.photos.length > 1 ?
        album.photos.length + ' Photos' :
        album.photos.length + ' Photo'
      }
    </p>
    <img src={album.photoCover} className="user-album-cover-img" />
  </li>
  </Link>
);
