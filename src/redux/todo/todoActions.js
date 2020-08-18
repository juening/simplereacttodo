import {
  TOGGLE_TODO_COMPLETION,
  REMOVE_TODO,
  ADD_TODO,
  GET_TODOS,
  UPDATE_TODO,
} from './todoTypes';

import { firestore } from '../../firebase/firebase';

export const getTodos = (userId) => async (dispatch) => {
  const todosRef = firestore.collection(`users/${userId}/todos`);

  const todosSnapshot = await todosRef.get();
  const userTodos = todosSnapshot.docs.map((todo) => todo.data());
  dispatch({ type: GET_TODOS, payload: userTodos });
};

export const toggleTodoCompletion = (id) => ({
  type: TOGGLE_TODO_COMPLETION,
  payload: id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const addTodo = (newTodo) => async (dispatch) => {
  const todosRef = firestore.collection(`users/${newTodo.userId}/todos`);
  try {
    const res = await todosRef.doc().set(newTodo);
    dispatch(getTodos(newTodo.userId));
  } catch (err) {
    console.error(err);
  }
};

export const updateTodo = (newTodo) => ({
  type: UPDATE_TODO,
  payload: newTodo,
});
