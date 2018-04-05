import React from 'react';

export default ({ photo }) => (
  <div className="image-item-wrap">
    <li>
      <a><img src={photo.imageUrl} alt={photo.title}/></a>
      <p>{photo.title}</p>
      <p className="photo-username">{photo.username}</p>
    </li>
  </div>
);
