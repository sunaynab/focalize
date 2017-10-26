import * as UserAPIUtil from '../util/user_api_util';
import {receiveUser} from './photo_actions';
import { receiveCurrentUser } from './session_actions';

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

export const unfollowUser = (userId, currentUserId) => dispatch => (
  UserAPIUtil.unfollow(userId).then((u) => {
    dispatch(fetchUser(u.id));
    UserAPIUtil.fetchUser(currentUserId).then(currentUser => (
      dispatch(receiveCurrentUser(currentUser))
    ));
  })
);

export const followUser = (userId, currentUserId) => dispatch => (
  UserAPIUtil.follow(userId).then((u) => {
    dispatch(fetchUser(u.id));
    UserAPIUtil.fetchUser(currentUserId).then(currentUser => (
      dispatch(receiveCurrentUser(currentUser))
    ));
  })
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
