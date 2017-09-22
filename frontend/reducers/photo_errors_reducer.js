import {
  RECEIVE_PHOTO_ERRORS,
  CLEAR_PHOTO_ERRORS
} from '../actions/photo_actions';

const _nullErrors = [];

const PhotoErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    case CLEAR_PHOTO_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default PhotoErrorsReducer;
