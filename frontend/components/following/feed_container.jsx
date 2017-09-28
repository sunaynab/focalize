import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPhotos } from '../../actions/photo_actions';
import Feed from './feed';
import {getAllPhotos} from '../../reducers/selectors';

const mapStateToProps = state  => {
  return {
    currentUser: state.session.currentUser,
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
)(Feed));
