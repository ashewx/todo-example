import React from 'react';
import './App.css';
import Item from './item';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './actions';
import {bindActionCreators} from 'redux';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todotext: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state.todotext);
    this.setState({
      todotext: ''
    });
  }

  onChangeTodoText = (e) => {
    this.setState({
      todotext: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-full-width"
            label="Label"
            style={{ margin: 3, width: "75%"}}
            placeholder="Add item"
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.onChangeTodoText}
            value={this.state.todotext}
          />
        </form>
        <div>
            {this.props.todos.map(todo => (
              <Item key={todo.id} click={() => this.props.deleteTodo(todo.id)} text={todo.text} />))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTodo,
    deleteTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
