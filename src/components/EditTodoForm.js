import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { updateTodo } from '../redux/todo/todoActions';

const EditTodoForm = ({ todo, toggleIsEditing, editTodo }) => {
  const [newTask, setNewTask] = useState(todo.task);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = {
      ...todo,
      task: newTask,
    };
    editTodo(updatedTodo);
    setNewTask('');
    toggleIsEditing();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: '1rem', width: '50%' }}>
      <TextField value={newTask} onChange={handleChange} autoFocus fullWidth />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editTodo: (newTodo) => dispatch(updateTodo(newTodo)),
});

export default connect(null, mapDispatchToProps)(EditTodoForm);
