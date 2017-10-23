import * as UserAPIUtil from '../util/user_api_util';
import {receiveUser} from './photo_actions';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const addProfilePhoto = (image, userId) => dispatch => (
  UserAPIUtil.updateUser(image, userId).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const unfollowUser = userId => dispatch => (
  UserAPIUtil.unfollow(userId).then(user => (
    dispatch(fetchUser(user.id))
  ))
);

export const followUser = userId => dispatch => (
  UserAPIUtil.follow(userId).then(user => (
    dispatch(fetchUser(user.id))
  ))
);

export const fetchUser = (userId) => dispatch => (
  UserAPIUtil.fetchUser(userId).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ));
};
