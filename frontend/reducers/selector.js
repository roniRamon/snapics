import { fetchAlbum } from '../actions/albums_actions';

export const getUserPhotos = (photos, userId) => {
  const userPhotos = [];
  Object.values(photos).map( photo => {
    if(photo.ownerId === parseInt(userId)){
      userPhotos.push(photo);
    }
  });
  return userPhotos;
};

export const getUserAlbums = (albums, userId) => {
  const userAlbums = [];
  Object.values(albums).map( album => {
    if( parseInt(userId) === album.ownerId)
      userAlbums.push(album);
  });
  return userAlbums;
};
