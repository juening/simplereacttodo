import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import { addTodo } from '../redux/todo/todoActions';

const NewTodoForm = ({ addTodo, currentUser }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      task,
      userId: currentUser.id,
      completed: false,
    };
    addTodo(newTodo);
    setTask('');
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (newTodo) => dispatch(addTodo(newTodo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
