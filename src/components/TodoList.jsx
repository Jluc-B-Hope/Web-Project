import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Симуляция API-запроса
    setTodos([
      { id: 1, text: 'Buy groceries', completed: false },
      { id: 2, text: 'Wash the car', completed: true },
      { id: 3, text: 'Read a book', completed: false },
    ]);
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  }).filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <FilterBar setFilter={setFilter} />
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
