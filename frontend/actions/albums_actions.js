import * as ApiAlbumsUtil from '../util/album_api_util';
import * as ApiAlbumsPhotoUtil from '../util/album_photos_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';
export const CLEAR_ALBUM_ERRORS = 'CLEAR_ALBUM_ERRORS';


const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

const removeAlbum = album => ({
  type: REMOVE_ALBUM,
  albumId: album.id,
});

const receiveAlbumErrors = errors => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors,
});

export const clearAlbumError = () => ({
  type: CLEAR_ALBUM_ERRORS,
});


export const fetchAlbum = albumId => dispatch => (
  ApiAlbumsUtil.fetchAlbum(albumId).then(
    resAlbum => dispatch(receiveAlbum(resAlbum)),
    err => dispatch(receiveAlbumErrors(err.responseJSON))
  )
);

export const createAlbum = album => dispatch => (
  ApiAlbumsUtil.createAlbum(album).then(
    resAlbum => dispatch(receiveAlbum(resAlbum)),
    err => dispatch(receiveAlbumErrors(err.responseJSON))
  )
);

export const updateAlbum = album => dispatch => (
  ApiAlbumsUtil.updateAlbum(album).then(
    resAlbum => dispatch(receiveAlbum(resAlbum)),
    err => dispatch(receiveAlbumErrors(err.responseJSON))
  )
);

export const deleteAlbum = albumId => dispatch => (
  ApiAlbumsUtil.deleteAlbum(albumId).then(
    photo => dispatch(removeAlbum(photo)),
    err => dispatch(receiveAlbumErrors(err.responseJSON))
  )
);

export const createAlbumPhoto = (albumId, photoId) => dispatch => (
  ApiAlbumsPhotoUtil.createAlbumPhoto(albumId, photoId).then(
    resAlbum => {
      debugger
      dispatch(receiveAlbum(resAlbum));
    }
  )
);
