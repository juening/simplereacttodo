import {
  TOGGLE_TODO_COMPLETION,
  REMOVE_TODO,
  ADD_TODO,
  GET_TODOS,
  UPDATE_TODO,
} from './todoTypes';

import { firestore } from '../../firebase/firebase';

//should have an  function for async callbacks

export const getTodos = (userId) => async (dispatch) => {
  const todosRef = firestore.collection(`users/${userId}/todos`);

  try {
    const todosSnapshot = await todosRef.get();
    const userTodos = todosSnapshot.docs.map((todo) =>
      Object.assign({ uid: todo.id }, todo.data())
    );
    dispatch({ type: GET_TODOS, payload: userTodos });
  } catch (err) {
    console.error(err);
  }
};

export const toggleTodoCompletion = (todo) => ({});

export const removeTodo = (todo) => async (dispatch) => {
  const todoRef = firestore.doc(`/users/${todo.userId}/todos/${todo.uid}`);
  try {
    const res = await todoRef.delete();
    console.log(res);
    dispatch(getTodos(todo.userId));
  } catch (err) {
    console.error(err);
  }
};

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
