import React from 'react';
import TodoListContainer from './todo_list_container.jsx';
import ToDoListItem from './todo_list_item.jsx';

const ToDoList = (props) => {
    const allTodos = props.todos.map( (todo, idx) => {

      let toprint = new ToDoListItem(todo);
      
      return (
        <li key={idx}>
          { toprint.title }
        </li>
      );
    });

    return(
    <main>
      <h2>Time to be productive</h2>
      <ul>
        {allTodos}
      </ul>
    </main>
    );
};

export default ToDoList;
