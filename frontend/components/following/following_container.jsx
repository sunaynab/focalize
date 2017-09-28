import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPhotos } from '../../actions/photo_actions';
import Following from './following';
import {getAllPhotos} from '../../reducers/selectors';

const mapStateToProps = state  => {
  return {
    currentUser: state.session.currentUser,
    numFollowers: state.session.currentUser.followers_user_ids.length,
    numFollowing: state.session.currentUser.following_user_ids.length,
    photos: getAllPhotos(state.entities.photos)

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotos())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Following));
