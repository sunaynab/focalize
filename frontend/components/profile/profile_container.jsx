import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPhoto,
         addPhoto,
         getUserPhotos,
         deletePhoto} from '../../actions/photo_actions';
import Profile from './profile';
import {getAllUserPhotos} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    photos: getAllUserPhotos(state),
    currentUser: state.session.currentUser,
    userId: ownProps.match.params.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: id => dispatch(getPhoto(id)),
    addPhoto: photo => dispatch(addPhoto(photo)),
    getUserPhotos: userId => dispatch(getUserPhotos(userId)),
    deletePhoto: id => dispatch(deletePhoto(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
