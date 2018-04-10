import { connect } from 'react-redux';
import { createAlbum } from '../../actions/albums_actions';
import AddAlbum from './new_album';


const mapDispatchToProps = (dispatch) => ({
  createAlbum: (album) => dispatch(createAlbum(album)),
});

export default connect(
  null,
  mapDispatchToProps
)(AddAlbum);
