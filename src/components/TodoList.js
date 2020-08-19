import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import { getTodos } from '../redux/todo/todoActions';

import Todo from './Todo';

const TodoList = ({ currentUser, getTodos, todos }) => {
  useEffect(() => {
    if (currentUser) {
      getTodos(currentUser.id);
    }
  }, [currentUser]);

  return (
    <>
      <h2>List of Todos</h2>
      <List>
        {todos && todos.map((todo) => <Todo key={todo.uid} todo={todo} />)}
      </List>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: (id) => dispatch(getTodos(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
