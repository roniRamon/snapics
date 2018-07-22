import * as ApiTagsUtil from '../util/tags_api_utils';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const REMOVE_TAG = 'REMOVE_TAG';

const receiveTags = tag => ({
  type: RECEIVE_TAGS,
  tag
});

const removeTag = tag => ({
  type: REMOVE_TAG,
  tagId: tag.id
});

export const createTag = tag => dispatch => (
  ApiTagsUtil.createTag(tag).then(
    resTag => dispatch(receiveTags(resTag))
  )
);

export const deleteTag = tagId => dispatch => (
  ApiTagsUtil.deleteTag(tagId).then(
    resTag => dispatch(removeTag(resTag))
  )
);

export const fetchAllTags = () => dispatch => (
  ApiTagsUtil.fetchAllTags().then(
    res => dispatch(receiveTags(res))
  )
);
