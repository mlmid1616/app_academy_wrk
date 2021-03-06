import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions.js';
import { merge } from 'lodash';
// import { allTodos } from './selector';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};
       action.todos.map( (todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
        let fresh = {};
        fresh[action.todo.id] = action.todo;
        return merge({}, state, fresh);
    // case REMOVE_TODO:

    default:
      return state;
  }
};



export default todosReducer;
