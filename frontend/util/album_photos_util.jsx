export const createAlbumPhoto = (albumId, photoId) => (
  $.ajax({
    url: `/api/albums/${albumId}/photo`,
    method: 'POST',
    data: {album: {photo_id: photoId}}
  })
);
