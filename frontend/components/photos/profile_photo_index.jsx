import ProfileItem from '../profile/profile_item';
import React from 'react';

export default (props) => {
  return(
  <div className="photos_index_div">
    <section className="photos_index_container profile_index_container">
      <ul className="photos_index">
        {
          props.photos.map( photo => (
            <ProfileItem
              photo={photo}
              key={`profile-photo-${photo.id}`}
              />
          ))
        }
      </ul>
    </section>
  </div>
);
};
