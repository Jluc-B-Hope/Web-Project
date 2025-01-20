import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css'; // Подключаем стили для главного компонента

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
