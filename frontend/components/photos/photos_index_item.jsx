import React from 'react';

export default ({ photo }) => (
  <li>
    <img src={photo.imageUrl} alt={photo.title}/>
  </li>
);
