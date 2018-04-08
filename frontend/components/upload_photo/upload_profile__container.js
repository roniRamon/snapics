import { connect } from 'react-redux';
import { updateUser } from '../../actions/session_actions';
import UploadProfilePic from './upload_profile_pic';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadProfilePic);
