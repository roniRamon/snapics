import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photos_actions';
import PhotoIndex from './photos_index';

const mapStateToProps = (state) => ({
  photos: Object.values(state.entities.photos),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
