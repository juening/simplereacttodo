import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <NewTodoForm />
        <TodoList />
      </div>
    );
  }
}
export default TodoApp;
