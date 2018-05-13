import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAlbum } from '../../actions/albums_actions';
import {fetchAllPhotos } from '../../actions/photos_actions';


const mapStateToProps = (state, ownProps) => ({
  album: state.entities.albums[ownProps.albumId],
  albumId: ownProps.albumId,
  userId: ownProps.userId,
  photos: state.entities.photos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
});

class ShowPageAlbum extends React.Component {

  componentDidMount(){
      this.props.fetchAlbum(this.props.albumId);
    }

  componentWillMount(){
    this.props.fetchAlbum(this.props.albumId).then(
      res => this.props.fetchAllPhotos()
    );
  }

    render(){
      if (this.props.album == undefined || this.props.albumId == undefined){
        return (
          <div>
            <div className="loading-image-container" >
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>;
            </div>
          </div>
        );
      }
      return (
          <div className="photo-album-item-wrap">
              <li>
                <Link to={`/album/${this.props.albumId}`}>
                  <div>
                    {
                      this.props.album.photos.length > 0 ?
                        <img src={ this.props.photos[this.props.album.photos[0]].imageUrl } /> :
                        <img src="http://res.cloudinary.com/dhyya9rw1/image/upload/v1523300185/space-2638126_640.jpg" />
                    }
                  </div>
                </Link>
                <p>
                  <Link to={`/album/${this.props.albumId}`}
                    className="link-to-user-profile-from-photo-show-page">
                    { this.props.album.title }
                  </Link>
                  <br/>
                  { this.props.album.photos.length == 1 ?
                    this.props.album.photos.length + " Photo" :
                    this.props.album.photos.length + " Photos"
                  }
                </p>
              </li>
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPageAlbum);
