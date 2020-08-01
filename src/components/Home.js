import React from 'react';

import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

const Home = () => {
  return (
    <>
      <NewTodoForm />
      <TodoList />
    </>
  );
};

export default Home;
