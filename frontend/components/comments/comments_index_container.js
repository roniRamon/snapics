import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photos_actions';
import CommentsIndex from './comments_index';
import { getPhotoComments } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
const photo = state.entities.photos[ownProps.photoId];
return  ({
    photo: photo,
    comments: getPhotoComments(state.entities.comments, photo)
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: (photoId) => dispatch(fetchPhoto(photoId)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);


//create a selector function to get all the comments
// for a giving photo in array
