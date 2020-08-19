import { TOGGLE_TODO_COMPLETION, GET_TODOS, UPDATE_TODO } from './todoTypes';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO_COMPLETION:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
