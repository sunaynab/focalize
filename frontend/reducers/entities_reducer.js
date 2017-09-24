import { combineReducers } from 'redux';

import user from './user_reducer';
import photos from './photo_reducer';

export default combineReducers({
  user,
  photos
});
