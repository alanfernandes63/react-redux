import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/todoList/index';
import store from './store/index';

function App() {
  
  return (
    <Provider store={ store }>
      <TodoList></TodoList>
    </Provider>
  );
}

export default App;