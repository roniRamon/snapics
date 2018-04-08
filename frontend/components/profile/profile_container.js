import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { fetchUser } from '../../actions/session_actions';
import Profile from './profile';
import { getUserPhotos } from '../../reducers/selector';


const mapStateToProps = (state, ownProps) => ({
  photos: getUserPhotos(state.entities.photos, ownProps.match.params.userId),
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
