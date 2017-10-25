import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPhoto, getUser } from '../../actions/photo_actions';
import PhotoDetail from './photo';

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.entities.photos,
    userId: parseInt(state.entities.photos.user_id),
    user: state.entities.user,
    photoId: ownProps.match.params.photoId
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    getPhoto: id => dispatch(getPhoto(id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail));
