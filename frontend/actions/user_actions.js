import * as UserAPIUtil from '../util/user_api_util';
import {receiveUser} from './photo_actions';

export const addProfilePhoto = (image, userId) => dispatch => (
  UserAPIUtil.updateUser(image, userId).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const unfollowUser = userId => dispatch => (
  UserAPIUtil.unfollow(userId).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const followUser = userId => dispatch => (
  UserAPIUtil.follow(userId).then(user => (
    dispatch(receiveUser(user))
  ))
);
