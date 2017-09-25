import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPhoto,
         addPhoto,
         getUserPhotos,
         deletePhoto,
         getUser} from '../../actions/photo_actions';
import Profile from './profile';
import {getAllUserPhotos} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: getAllUserPhotos(state.entities.photos),
    // currentUser: state.session.currentUser,
    userId: ownProps.match.params.userId,
    user: state.entities.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: id => dispatch(getPhoto(id)),
    addPhoto: photo => dispatch(addPhoto(photo)),
    getUserPhotos: userId => dispatch(getUserPhotos(userId)),
    deletePhoto: id => dispatch(deletePhoto(id)),
    getUser: photo => dispatch(getUser(photo))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
