import React from 'react';
import { connect } from 'react-redux';
import { receiveTodo } from '../../actions/todo_actions.js';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = { title: '', body: ''};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(e) {
    // debugger
    const val = e.currentTarget.value;
    this.setState( { title: val } );
  }

  handleChangeBody(e) {
    const val = e.currentTarget.value;
    this.setState( { body: val } );
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const id = new Date().getTime();
    const newTodo = Object.assign({}, this.state, {id, done: false});
    this.props.receiveTodo(newTodo);
    this.setState( { title: '', body: ''} );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChangeTitle} value={this.state.title}></input>
        <input onChange={this.handleChangeBody} value={this.state.body}></input>
        <button>
          Make a ToDO !!
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveTodo: (todo) => { dispatch(receiveTodo(todo)); }
  });
};

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
