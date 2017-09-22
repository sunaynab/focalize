import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const CLEAR_PHOTO_ERRORS = "CLEAR_PHOTO_ERRORS";

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const receiveErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_PHOTO_ERRORS
});

export const getPhoto = id => dispatch => (
  PhotoAPIUtil.getPhoto(id).then(photo => (
    dispatch(receivePhoto(photo))
  )), err => (
    dispatch(receiveErrors(err.responseJSON))
  )
);

export const addPhoto = photo => dispatch => (
  PhotoAPIUtil.addPhoto(photo).then(pic => (
    dispatch(receivePhoto(photo))
  )), err => (
    dispatch(receiveErrors(err.responseJSON))
  )
);

export const getPhotos = () => dispatch => (
  PhotoAPIUtil.getPhotos().then(photos => (
    dispatch(receivePhotos(photos))
  ))
);

export const deletePhoto = photo => dispatch => (
  PhotoAPIUtil.deletePhoto(photo.id).then((pic => (
    dispatch(removePhoto(pic)))
  ))
);
