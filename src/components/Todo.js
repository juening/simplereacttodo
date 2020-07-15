import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import EditTodoForm from './EditTodoForm';

import { toggleTodoCompletion, removeTodo } from '../redux/todo/todoActions';

const Todo = ({ todo, toggleCompletion, deleteTodo }) => {
  const { id, task, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleCompleteion = () => {
    toggleCompletion(id);
  };

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm toggleIsEditing={toggleIsEditing} todo={todo} />
      ) : (
        <>
          <Checkbox checked={completed} onClick={handleToggleCompleteion} />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : '' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCompletion: (id) => dispatch(toggleTodoCompletion(id)),
  deleteTodo: (id) => dispatch(removeTodo(id)),
});

export default connect(null, mapDispatchToProps)(Todo);
