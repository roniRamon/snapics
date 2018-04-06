import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions';
import UploadImage from './upload_photo';

const mapStateToProps = (state, ownProps) => ({
  photo: {
    uploadedFileCloudinaryUrl: '',
    title: '',
    description: '',
    ownerId: state.session.currentUser.id,
  },

});

const mapDispatchToProps = (dispatch) => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImage);
