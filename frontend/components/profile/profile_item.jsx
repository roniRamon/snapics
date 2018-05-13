import React from 'react';
import { Link } from 'react-router-dom';


export default ({ photo }) => (
  <div className="image-item-wrap">
    <Link to={`/photo/${photo.id}`}>
      <li className="profile-image-item">
          <img src={photo.imageUrl} alt={photo.title}/>
            <p>{photo.title}</p>
            <p className="photo-username">
              <span>
                { photo.comments.length == 1 ?
                  photo.comments.length + " Comment" :
                  photo.comments.length + " Comments"
                }
              </span>
            </p>
      </li>
    </Link>
  </div>
);
