import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photos_actions';
import { deleteComment } from '../../actions/comments_actions';
import CommentsIndex from './comments_index';
import { getPhotoComments } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
const photo = state.entities.photos[ownProps.photoId];
return  ({
    photo: photo,
    comments: getPhotoComments(state.entities.comments, photo),
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);
