import React from 'react';

class ToDoListItem extends React.Component {
  constructor(props){
    super(props);

    this.id = props.id;
    this.title = props.title;
    this.body = props.body;
  }

  render(){
    return(
    <li>{this.props.todo.title}</li>
    );
  }
}

export default ToDoListItem;
