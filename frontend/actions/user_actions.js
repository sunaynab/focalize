import * as UserAPIUtil from '../util/user_api_util';
import {receiveUser} from './photo_actions';

export const addProfilePhoto = (image, userId) => dispatch => (
  UserAPIUtil.updateUser(image, userId).then(user => (
    dispatch(receiveUser(user))
  ))
);
