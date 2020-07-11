import { TOGGLE_TODO_COMPLETION, REMOVE_TODO } from './todoTypes';

export const toggleTodoCompletion = (id) => ({
  type: TOGGLE_TODO_COMPLETION,
  payload: id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});
