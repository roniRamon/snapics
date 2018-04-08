export const fetchAllPhotos = () => (
  $.ajax({
    url: '/api/photos',
    method: 'GET',
  })
);

export const fetchPhoto = photoId => (
  $.ajax({
    url: `/api/photos/${photoId}`,
    method: 'GET',
  })
);

export const createPhoto = photo => (
  $.ajax({
    url: `/api/photos/`,
    method: 'POST',
    data: { photo },
  })
);

export const updatePhoto = photo => (
  $.ajax({
    url: `/api/photos/${photo.id}`,
    method: 'PATCH',
    data: { photo },
  })
);

export const deletePhoto = photoId => (
  $.ajax({
    url: `/api/photos/${photoId}`,
    method: 'DELETE',
  })
);
