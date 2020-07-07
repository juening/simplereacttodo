import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Todo from './Todo';

const TodoList = (props) => {
  console.log(props);
  return (
    <Paper>
      <h2>List of Todos</h2>
      <List>
        {props.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </List>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps)(TodoList);
