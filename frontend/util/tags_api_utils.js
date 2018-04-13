
export const createTag = (tag) => (
  $.ajax({
    url: '/api/tags/',
    method: 'POST',
    data: {tag: {tag_name: tag.tagName, photo_id: tag.photoId} }
  })
);

export const deleteTag = (tagId) => (
  $.ajax({
    url: `/api/tags/${tagId}`,
    method: 'DELETE',
  })
);
