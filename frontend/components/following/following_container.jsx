import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUsers } from '../../actions/user_actions';
import Following from './following';
import {getUsersAndPhotos} from '../../reducers/selectors';

const mapStateToProps = state  => {
  return {
    currentUser: state.session.currentUser,
    numFollowers: state.session.currentUser.followers_user_ids.length,
    numFollowing: state.session.currentUser.following_user_ids.length,
    usersAndPhotos: getUsersAndPhotos(state.entities.user)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Following));
