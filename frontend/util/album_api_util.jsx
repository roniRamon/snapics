
export const fetchAlbum = albumId => (
  $.ajax({
    url: `/api/albums/${albumId}`,
    method: 'GET',
    dataType: 'json',
  })
);

export const createAlbum = album => (
  $.ajax({
    url: '/api/albums',
    method: 'POST',
    data: { album },
    dataType: 'json',
  })
);

export const updateAlbum = album => (
  $.ajax({
    url: `/api/albums/${album.id}`,
    method: 'PATCH',
    data: { album },
    dataType: 'json'
  })
);

export const deleteAlbum = albumId => (
  $.ajax({
    url: `/api/albums/${albumId}`,
    method: 'DELETE',
  })
);
