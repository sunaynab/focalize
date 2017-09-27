import merge from 'lodash/merge';

import { RECEIVE_USER, RECEIVE_PROFILE_PHOTO } from '../actions/photo_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return Object.assign({}, user);
    default:
      return state;
  }
};

export default UserReducer;
