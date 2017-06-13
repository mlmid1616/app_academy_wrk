import React from 'react';
import TodoListContainer from './todo_list_container.jsx';
import ToDoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

const ToDoList = (props) => {
    const allTodos = props.todos.map( (todo, idx) => {

      // let toprint = new ToDoListItem(todo);
      // <li key={idx}>
      //   { toprint.title }
      // </li>

      return (
        <ToDoListItem key={todo.id} todo={todo} />
      );
    });

    return(
    <main>
      <h2>Time to be productive</h2>
      <ul>
        {allTodos}
      </ul>

      <TodoForm />
    </main>
    );
};

export default ToDoList;
