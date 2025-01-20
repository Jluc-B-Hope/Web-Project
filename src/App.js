import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/actions';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <SearchBar />
        <FilterBar />
        <TodoList todos={todos} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
