import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/photo_actions';
import { RECEIVE_USERS } from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return Object.assign({}, user);
    case RECEIVE_USERS:
      const users = action.users;
      return Object.assign({}, users);
    default:
      return state;
  }
};

export default UserReducer;
