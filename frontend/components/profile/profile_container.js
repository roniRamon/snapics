import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photos_actions';
import Profile from './profile';
import { getUserPhotos } from '../../reducers/selector';


const mapStateToProps = (state, ownProps) => ({
  photos: getUserPhotos(state.entities.photos, ownProps.match.params.userId),
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
