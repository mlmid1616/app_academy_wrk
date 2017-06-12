


export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let result = keys.map( (el) => state.todos[el] );
  return result;
};



export default allTodos;
