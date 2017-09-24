import * as PhotoAPIUtil from '../util/photo_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const CLEAR_PHOTO_ERRORS = "CLEAR_PHOTO_ERRORS";
export const START_LOADING_PHOTOS = "START_LOADING_PHOTOS";
export const START_LOADING_PHOTO = "START_LOADING_PHOTO";
export const RECEIVE_USER = "RECEIVE_USER";

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

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

// export const startLoadingPhotos = () => ({
//   type: START_LOADING_PHOTOS
// });
//
// export const startLoadingPhoto = () => ({
//   type: START_LOADING_PHOTO
// });

// export const getUser = photo => dispatch => (
// PhotoAPIUtil.fetchUser(photo).then(user => (
//     dispatch(receiveUser(user))
//   ))
// );

export const getPhoto = id => dispatch => (
  PhotoAPIUtil.fetchPhoto(id).then(photo => {
    dispatch(receivePhoto(photo));
    PhotoAPIUtil.fetchUser(photo).then(user => (
      dispatch(receiveUser(user))
    ));
  }), err => (
    dispatch(receiveErrors(err.responseJSON))
  )
);

export const addPhoto = photo => dispatch => (
  PhotoAPIUtil.addPhoto(photo).then(pic => (
    dispatch(receivePhoto(pic))
  )), err => (
    dispatch(receiveErrors(err.responseJSON))
  )
);

export const getUserPhotos = userId => dispatch => (
  PhotoAPIUtil.fetchUserPhotos(userId).then(photos => (
    dispatch(receivePhotos(photos))
  ))
);

export const getPhotos = () => dispatch => {
  // dispatch(startLoadingPhotos());
  return PhotoAPIUtil.fetchPhotos().then(photos => (
    dispatch(receivePhotos(photos))
  ));
};

export const deletePhoto = photo => dispatch => (
  PhotoAPIUtil.deletePhoto(photo.id).then((pic => (
    dispatch(removePhoto(pic)))
  ))
);
