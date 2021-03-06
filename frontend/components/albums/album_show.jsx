import React from 'react';
import { Link } from 'react-router-dom';
import ProfileItem from '../profile/profile_item';
import UploadPhotoToAlbumContainer from './upload_photo_to_album_container';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { firstLoad: true };
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId)
      .then(() => this.props.fetchAllPhotos())
      .then(() => {
        this.setState({firstLoad: false});
      });
  }

  componentWillReceiveProps (newProps) {
    if (this.props.match.params.albumId != newProps.match.params.albumId){
      this.props.fetchAlbum(newProps.match.params.albumId);
    }
  }

  render() {
    if (this.state.firstLoad) return <section>Loading...</section>;
    
    return (
        <div>
          <section className="show-album-index-page">
            <Link to={`/profile/${this.props.album.ownerId}/albums`}>
              &#8592; Back to albums list
            </Link>

            <section className="image-for-album-show-page">
              <UploadPhotoToAlbumContainer album={this.props.album} />
              <h1>
                {this.props.album.title}
              </h1>
              <p>
                {this.props.album.photos.length === 1 ?
                  this.props.album.photos.length + " Photo" :
                  this.props.album.photos.length + " Photos"
                }
              </p>
            </section>

            <div className="show-all-photo-in-album photos_index_div">
              <section className="photos_index_container album_show_container">
                <ul className="photos_index">
                  {
                    this.props.album.photos.map( photoId => (

                      <ProfileItem
                        photo={this.props.photos[photoId]}
                        key={`profile-photo-${photoId}`}
                        />
                    ))
                  }
                </ul>
              </section>
            </div>
          </section>
        </div>
    );
  }

}


export default AlbumShow;
