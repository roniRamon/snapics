import React from 'react';
import { Link } from 'react-router-dom';


export default ({ photo }) => (
  <div className="image-item-wrap">
    <Link to={`/photo/${photo.id}`}>
      <li>
          <img src={photo.imageUrl} alt={photo.title}/>
          <p>{photo.title}</p>
          <p className="photo-username">{photo.username}</p>
      </li>
    </Link>
  </div>
);
