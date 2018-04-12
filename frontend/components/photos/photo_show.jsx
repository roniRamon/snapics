import React from 'react';
import { Link } from 'react-router-dom';
import ShowPageAlbumContainer from '../albums/photo_showpage_album_container';
import UploadImage from '../upload_photo/upload_photo';
import CommentsIndexCotainer from '../comments/comments_index_container';



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
    if (this.props.match.params.photoId !== newProps.match.params.photoId){
      this.props.fetchPhoto(newProps.match.params.photoId);
    }
  }

  render() {

    if(this.props.photo == undefined || this.props.users[this.props.photo.ownerId] === undefined){
      return <section >Loading...</section>;
    }
    return (
      <div className="show-page-div-wrapper-full-page">
        <section className="hero-show-page" >
          <Link to="/explore">&#8592; Back to explore</Link>
          <img src={this.props.photo.imageUrl} />
        </section>
        <main className="main-show-page">

          <section className="photo_show_left">
            <div className="photo_show_left-first-div">
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
            </div>
            <p className="comments-count-per-photo">
              <span>
                {this.props.photo.comments.length}
              </span>
              <br />
              {
                this.props.photo.comments.length == 1 ?
                "Comment" :
                "Comments" 
              }
            </p>
            <hr/>
            <CommentsIndexCotainer photoId={this.props.photo.id} />
          </section>

          <section className="photo_show_right">
            <p>
                This photo is in { this.props.photo.albums.length == 1 ?
                this.props.photo.albums.length + " album" :
                this.props.photo.albums.length + " albums" } </p>
            <hr />
            <ul>{
                this.props.photo.albums.map( albumId => <ShowPageAlbumContainer
                  albumId={ albumId }
                  userId= { this.props.photo.ownerId }
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
