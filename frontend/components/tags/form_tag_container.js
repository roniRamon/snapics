import { connect } from 'react-redux';
import FormTag from './form_tag';
import { fetchPhoto } from '../../actions/photos_actions';
import { createTag } from '../../actions/tags_actions';

const mapStateToProps = (state, ownProps) => {
const photo = ownProps.photo;
return  ({
    photo: photo,
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  createTag: comment => dispatch(createTag(comment)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormTag);
