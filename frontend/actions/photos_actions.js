import * as ApiPhotosUtil from '../util/photos_api_util';

export const RECEIVE_ALL_PHOTOS =  'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const CLEAR_PHOTO_ERRORS = 'CLEAR_PHOTO_ERRORS';

const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photoId: photo.id
});

const receivePhotoErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

export const clearPhotoError = () => ({
  type: CLEAR_PHOTO_ERRORS,
});

export const fetchAllPhotos = () => dispatch => (
  ApiPhotosUtil.fetchAllPhotos().then(
    photos => dispatch(receiveAllPhotos(photos)),
    err => dispatch(receivePhotoErrors(err.responseJSON))
  )
);

export const fetchPhoto = photoId => dispatch => (
  ApiPhotosUtil.fetchPhoto(photoId).then(
    photo => dispatch(receivePhoto(photo)),
    err => dispatch(receivePhotoErrors(err.responseJSON))
  )
);

export const createPhoto = photo => dispatch => (
  ApiPhotosUtil.createPhoto(photo).then(
    resPhoto => dispatch(receivePhoto(resPhoto)),
    err => dispatch(receivePhotoErrors(err.responseJSON))
  )
);

export const updatePhoto = photo => dispatch => (
  ApiPhotosUtil.updatePhoto(photo).then(
    resPhoto => dispatch(receivePhoto(resPhoto)),
    err => dispatch(receivePhotoErrors(err.responseJSON))
  )
);

export const deletePhoto = photoId => dispatch => (
  ApiPhotosUtil.deletePhoto(photoId).then(
    photo => dispatch(removePhoto(photo)),
    err => dispatch(receivePhotoErrors(err.responseJSON))
  )
);
