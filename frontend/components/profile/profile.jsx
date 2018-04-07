import React from 'react';
import { Link } from 'react-router-dom';
import ProfileItem from './profile_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllPhotos();
  }

  render() {
    return (
      <div>
        <section className="profile-hero-img">

        </section>
        <div className="profile-navbar">
          <ul>
            <li>Photos</li>
            <li>Albums</li>
          </ul>
        </div>
        <div className="photos_index_div">
          <section className="photos_index_container profile_index_container">
            <ul className="photos_index">
              {
                this.props.photos.map( photo => (
                  <ProfileItem
                    photo={photo}
                    key={`profile-photo-${photo.id}`}
                    />
                ))
              }
            </ul>
          </section>
        </div>

      </div>
    );
  }
}

export default Profile;
