import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createPhoto, clearPhotoError } from '../../actions/photos_actions';
import Session from './session';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errorsPhoto: state.errors.photos,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  clearPhotoError: () => dispatch(clearPhotoError()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
