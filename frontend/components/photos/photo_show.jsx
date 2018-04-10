import React from 'react';
import { Link } from 'react-router-dom';
import ShowPageAlbumContainer from '../albums/photo_showpage_album_container';
import UploadImage from '../upload_photo/upload_photo';



class PhotoShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
    }

  componentWillMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps (newProps) {
    if (this.props.match.params.photoId != newProps.match.params.photoId){
      this.props.fetchPhoto(newProps.match.params.photoId);
    }
  }

  render() {

    if(this.props.photo == undefined){
      return <section >Loading...</section>;
    }
    else if ( this.props.users[this.props.photo.ownerId] === undefined ) {
      return <section >Loading...</section>;
    }

    return (
      <div>
        <section className="hero-show-page" >
          <Link to="/explore">&#8592; Back to explore</Link>
          <img src={this.props.photo.imageUrl} />
        </section>
        <main className="main-show-page">
          <section className="photo_show_left">
            <img className="user-icon" src={this.props.users[this.props.photo.ownerId].imageUrl} />
            <p>
              <span className="username-photo-show">
                <Link to={`/profile/${this.props.photo.ownerId}`}>
                  {this.props.users[this.props.photo.ownerId].username}
                </Link>
              </span>

              <span className="title-photo-show">{this.props.photo.title}</span>
              <span className="description-photo-show">{this.props.photo.description}</span>

            </p>
          </section>
          <section className="photo_show_right">
            <ul>{
                this.props.photo.albums.map( albumId => <ShowPageAlbumContainer
                  albumId={ albumId }
                  key={`albums-belongto-image-${albumId}`} />
                )
              }
            </ul>
          </section>
        </main>
      </div>
    );
  }

}

export default PhotoShow;
