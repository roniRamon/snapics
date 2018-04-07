import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions';
import UploadPhoto from './upload_photo';

const mapStateToProps = (state, ownProps) => ({
  ownerId: state.session.currentUser.id,
});

const mapDispatchToProps = (dispatch) => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPhoto);
