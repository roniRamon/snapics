import { connect } from 'react-redux';
import UploadPhotoToAlbum from './upload_photo_to_album';
import {createAlbumPhoto, fetchAlbum} from '../../actions/albums_actions';
import { fetchAllPhotos } from '../../actions/photos_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  album: ownProps.album,
  photos: state.entities.photos,
});

const mapDispatchToProps = dispatch => ({
  createAlbumPhoto: (albumId, photoId) => dispatch(createAlbumPhoto(albumId, photoId)),
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPhotoToAlbum);
