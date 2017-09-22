import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPhoto,
         addPhoto,
         getPhotos,
         deletePhoto} from '../../actions/photo_actions';
import Profile from './profile';
import {getAllUserPhotos} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    photos: getAllUserPhotos(state),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: id => dispatch(getPhoto(id)),
    addPhoto: photo => dispatch(addPhoto(photo)),
    getPhotos: () => dispatch(getPhotos()),
    deletePhoto: id => dispatch(deletePhoto(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
