import { connect } from 'react-redux';
import AlbumsIndex from './albums_index';
import { getUserAlbums } from  '../../reducers/selector';
import { fetchAlbum, deleteAlbum } from  '../../actions/albums_actions';
import { fetchUser } from  '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: state.entities.users[ownProps.match.params.userId],
  albums: getUserAlbums(state.entities.albums, ownProps.match.params.userId),
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
  deleteAlbum: albumId => dispatch(deleteAlbum(albumId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsIndex);
