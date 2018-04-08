import { connect } from 'react-redux';
import { createPhoto, clearPhotoError } from '../../actions/photos_actions';
import UploadPhoto from './upload_photo';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errorsPhoto: state.errors.photos,
});

const mapDispatchToProps = (dispatch) => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  clearPhotoError: () => dispatch(clearPhotoError()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPhoto);
