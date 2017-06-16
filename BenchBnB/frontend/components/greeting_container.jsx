import Greeting from './greeting';
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
