import React from 'react';
import { Link } from 'react-router-dom';
import ProfileItem from './profile_item';
import UploadPhotoContainer from '../upload_photo/upload_photo_container';
import UploadProfileContainer from '../upload_photo/upload_profile__container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchAllPhotos();
  }

  componentWillMount() {
      this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchAllPhotos();
  }

  componentWillReceiveProps (newProps) {
    if (this.props.match.params.userId != newProps.match.params.userId){
      this.props.fetchUser(newProps.match.params.userId);
    }
  }

  render() {
    if(typeof this.props.user == "undefined"){
      return <section >Loading...</section>;
    }
    return (
      <div>
        <section className="profile-hero-img">
          <section className="user-info-profile">
            { this.props.currentUser.id === this.props.user.id ?
              <UploadProfileContainer />  :
                <img src={this.props.user.img_url} />
            }
            <ul>
              <li>
                {this.props.user.username}
              </li>
              <li className="user-info-email" >
                <span>
                  {this.props.user.email}
                </span>
                <span>
                  {
                    this.props.photos.length === 1 ?
                    this.props.photos.length + " Photo" :
                    this.props.photos.length + " Photos"
                  }
                </span>
              </li>
            </ul>
          </section>
        </section>
        <div className="profile-navbar">
          <ul>
            <li>Photos</li>
            <li>
              { this.props.currentUser.id === this.props.user.id ?
                <UploadPhotoContainer /> :
                ""
              }
            </li>
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
