import React, { Component } from 'react';
import AddTodo from './AddTodo';
import { Todo } from './Todo';

class App extends Component {
  state = {
    todos: []
  }
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos: todos
    })
  }
  addTodo = todo => {
    todo.id = Math.random();
    const todos = [...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todo todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
        <AddTodo addTodo={ this.addTodo } />
      </div>
      );
    }
}

export default App;