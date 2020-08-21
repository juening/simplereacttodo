import { GET_TODOS, CLEAR_TODOS } from './todoTypes';

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

export const toggleTodoCompletion = (todo) => async (dispatch) => {
  const todoRef = firestore.doc(`users/${todo.userId}/todos/${todo.uid}`);
  try {
    await todoRef.set({ completed: !todo.completed }, { merge: true });
    dispatch(getTodos(todo.userId));
  } catch (err) {
    console.error(err);
  }
};

export const removeTodo = (todo) => async (dispatch) => {
  const todoRef = firestore.doc(`/users/${todo.userId}/todos/${todo.uid}`);
  try {
    await todoRef.delete();
    dispatch(getTodos(todo.userId));
  } catch (err) {
    console.error(err);
  }
};

export const addTodo = (newTodo) => async (dispatch) => {
  const todosRef = firestore.collection(`users/${newTodo.userId}/todos`);
  try {
    await todosRef.doc().set(newTodo);
    dispatch(getTodos(newTodo.userId));
  } catch (err) {
    console.error(err);
  }
};

export const updateTodo = (newTodo) => async (dispatch) => {
  const todoRef = firestore.doc(`users/${newTodo.userId}/todos/${newTodo.uid}`);
  try {
    await todoRef.set(newTodo);
    dispatch(getTodos(newTodo.userId));
  } catch (err) {
    console.error(err);
  }
};

export const clearTodos = () => ({
  type: CLEAR_TODOS,
});
