import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <Paper>
      <h2>List of Todos</h2>
      <List>
        {todos.map((todo) => (
          <>
            <Todo key={todo.id} todo={todo} />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
