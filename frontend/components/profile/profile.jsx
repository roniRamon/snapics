import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ProfilePhotoIndex from '../photos/profile_photo_index';
import UploadPhotoContainer from '../upload_photo/upload_photo_container';
import UploadProfileContainer from '../upload_photo/upload_profile__container';
import AlbumsIndexContainer from '../albums/albums_index_container';

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
    if(this.props.user == undefined){
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
          <ul className="profile-navbar-ul">
            <li className="profile-navbar-li">
              <span>
                <Link to={`/profile/${this.props.user.id}/photos`}>
                  Photos
                </Link>
              </span>
            </li>
            <li className="profile-navbar-li">
              <span>
              { this.props.currentUser.id === this.props.user.id ?
                <UploadPhotoContainer /> :
                ""
              }
              </span>
            </li>
            <li className="profile-navbar-li">
              <span>
                <Link to={`/profile/${this.props.user.id}/albums`}>
                  Albums
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <Switch >
          <Route path="/profile/:userId/photos" render={() => <ProfilePhotoIndex photos={this.props.photos}/>} />
          <Route path="/profile/:userId/albums" component={AlbumsIndexContainer} />
          <Route path="/profile/:userId" render={() => <ProfilePhotoIndex photos={this.props.photos}/>} />
        </Switch>

      </div>
    );
  }
}

export default Profile;
