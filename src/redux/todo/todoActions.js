import { TOGGLE_TODO_COMPLETION } from './todoTypes';

export const toggleTodoCompletion = (id) => ({
  type: TOGGLE_TODO_COMPLETION,
  payload: id,
});
