import { TOGGLE_TODO_COMPLETION } from './todoTypes';

const initialState = {
  todos: [
    { id: 1, task: 'Release lady bugs into garden.', completed: false },
    { id: 2, task: 'Mow the lawn with goats', completed: true },
  ],
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
    default:
      return state;
  }
};

export default todoReducer;