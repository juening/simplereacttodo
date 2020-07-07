import React from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { toggleTodoCompletion } from '../redux/todo/todoActions';

const Todo = ({ todo, toggleCompletion }) => {
  const { id, task, completed } = todo;

  const handleToggleCompleteion = (dispatch) => {
    toggleCompletion(id);
  };

  return (
    <>
      <ListItem style={{ height: '64px' }}>
        <Checkbox checked={completed} onClick={handleToggleCompleteion} />
        <ListItemText
          style={{ textDecoration: completed ? 'line-through' : '' }}
        >
          {task}
        </ListItemText>
      </ListItem>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCompletion: (id) => dispatch(toggleTodoCompletion(id)),
});

export default connect(null, mapDispatchToProps)(Todo);
