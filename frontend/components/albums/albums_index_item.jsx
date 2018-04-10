import React from 'react';
import { Link } from 'react-router-dom';


export default ({album}) => (
  <div className="user-album-cover-div">
    <li className="user-album-cover">
      <Link to={`/album/${album.id}`}
            className="user-album-cover-link">
        <p>
          <span className="user-album-cover-title">
            {album.title} <br />
          </span>
          {
            album.photos.length === 1 ?
            album.photos.length + ' Photo' :
            album.photos.length + ' Photos'
          }
        </p>
        <img src={album.photoCover} className="user-album-cover-img" />
      </Link>
    </li>
  </div>
);
