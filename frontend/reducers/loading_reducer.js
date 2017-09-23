import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  START_LOADING_PHOTOS,
  START_LOADING_PHOTO,
  RECEIVE_PHOTO_ERRORS
} from '../actions/photo_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

const LoadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PHOTOS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_PHOTO_ERRORS:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_PHOTOS:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_PHOTO:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default LoadingReducer;
