import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photos_actions';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => ({
  photo: state.entities.photos[ownProps.match.params.photoId],
  users: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
