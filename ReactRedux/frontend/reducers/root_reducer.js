import { combineReducers } from 'redux';
import todosReducer from './todos_reducer.js'; //I need the dot?

const rootReducer = combineReducers({
  // debugger;
  todos: todosReducer
});











export default rootReducer;
