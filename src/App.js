import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import TodoApp from './components/TodoApp';

import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TodoApp />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
