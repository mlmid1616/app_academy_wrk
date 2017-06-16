import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

let defaultState = () => ({
  currentUser: null,
  errors: []
});

const sessionsReducer = (state = defaultState(), action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return(
        merge({}, defaultState, action.currentUser)
      );
    case RECEIVE_ERRORS:
      return(
        merge({}, defaultState, action.errors)
      );
    default:
        return state;
  }
};

export default sessionsReducer;
