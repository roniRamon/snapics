import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Session from './session';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
