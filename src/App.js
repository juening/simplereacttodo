import React from 'react';
import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp';

import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
