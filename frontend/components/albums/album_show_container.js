import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { fetchAlbum, deleteAlbum } from  '../../actions/albums_actions';
import AlbumShow from './album_show';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  album: state.entities.albums[ownProps.match.params.albumId],
  photos: state.entities.photos,
});

const mapDispatchToProps = dispatch => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
