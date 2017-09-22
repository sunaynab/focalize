import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import photos from './photo_reducer';

const RootReducer = combineReducers({
  session,
  photos,
  errors,
});

export default RootReducer;
