import React from 'react';

// class ToDoListItem extends React.Component {
//   constructor(){
//     super();
//
//     // this.id = props.id;
//     // this.title = props.title;
//     // this.body = props.body;
//   }
//
//   render(){
//     return(
//       <li >
//         { this.props.todo.title }
//       </li>
//     );
//   }
// }
const ToDoListItem = (props) => {
  return (
    <li>{props.todo.title}</li>
  );
}

export default ToDoListItem;
