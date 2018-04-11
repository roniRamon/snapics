import { connect } from 'react-redux';
import FormComment from './form_comment';
import { fetchPhoto } from '../../actions/photos_actions';
import { createComment } from '../../actions/comments_actions';

const mapStateToProps = (state, ownProps) => {
const photo = state.entities.photos[ownProps.photoId];
return  ({
    photo: photo,
    currentUser: state.session.currentUser,
    addedComment: ownProps.addedComment,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  createComment: comment => dispatch(createComment(comment)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComment);
