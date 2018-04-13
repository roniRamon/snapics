import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photos_actions';
import { deleteTag, createTag } from '../../actions/tags_actions';
import TagsIndex from './tags_index';
import { getPhotoTags } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.photoId];
  return  ({
      photo: photo,
      tags: getPhotoTags(state.entities.tags, photo),
      currentUser: state.session.currentUser,
    });
  };

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  deleteTag: tagId => dispatch(deleteTag(tagId)),
  createTag: tag => dispatch(createTag(tag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);
