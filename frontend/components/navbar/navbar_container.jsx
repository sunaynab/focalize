import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    logOut: () => dispatch(logout())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
