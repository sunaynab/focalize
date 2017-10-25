import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPhoto,
         addPhoto,
         getUserPhotos,
         deletePhoto,
         getUser} from '../../actions/photo_actions';
import { addProfilePhoto, unfollowUser, followUser } from '../../actions/user_actions';
import Profile from './profile';
import {getAllPhotos} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let user;
  if(state.entities.user[ownProps.match.params.userId]){
    user = state.entities.user[ownProps.match.params.userId];
  }else{
    user = {};
  }
  return {
    photos: getAllPhotos(state.entities.photos),
    currentUser: state.session.currentUser,
    numFollowers: user.followers_user_ids.length,
    numFollowing: user.following_user_ids.length,
    userId: ownProps.match.params.userId,
    user: user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: id => dispatch(getPhoto(id)),
    addPhoto: photo => dispatch(addPhoto(photo)),
    getUserPhotos: userId => dispatch(getUserPhotos(userId)),
    deletePhoto: id => dispatch(deletePhoto(id)),
    getUser: photo => dispatch(getUser(photo)),
    addProfilePhoto: (image, userId) => dispatch(addProfilePhoto(image, userId)),
    unfollowUser: userId => dispatch(unfollowUser(userId)),
    followUser: userId => dispatch(followUser(userId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
