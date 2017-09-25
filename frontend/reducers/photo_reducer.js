import merge from 'lodash/merge';

import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';


const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      const photos = action.photos;
      return merge({}, photos);
    case RECEIVE_PHOTO:
      return Object.assign({}, action.photo);
    case REMOVE_PHOTO:
      delete newState[action.photo.id];
      return newState;
    default:
      return state;
  }
};

export default PhotoReducer;
