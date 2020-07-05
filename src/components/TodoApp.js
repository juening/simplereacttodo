import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        task: 'Mow the lawn with sheep',
        completed: true,
        important: false,
      },
      {
        id: 2,
        task: 'Walk the Goldfish',
        completed: false,
        important: true,
      },
    ],
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoForm />
        <TodoList todos={todos} />
      </div>
    );
  }
}
export default TodoApp;
