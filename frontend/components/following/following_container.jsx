import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import Following from './following';
import {getUsersAndPhotos} from '../../reducers/selectors';
import { unfollowUser, followUser } from '../../actions/user_actions';

const mapStateToProps = state  => {
  let usersAndPhotos;
  if (Object.values(state.entities.user)[1]){
    if(Object.values(state.entities.user)[1].photos){
    usersAndPhotos = getUsersAndPhotos(state.entities.user);
    }
  }else {
    usersAndPhotos = [];
  }
  return {
    currentUser: state.session.currentUser,
    numFollowers: state.session.currentUser.followers_user_ids.length,
    numFollowing: state.session.currentUser.following_user_ids.length,
    usersAndPhotos: usersAndPhotos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    unfollowUser: userId => dispatch(unfollowUser(userId)),
    followUser: userId => dispatch(followUser(userId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Following));
