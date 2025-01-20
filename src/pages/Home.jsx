import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, setLoading, setError } from '../redux/actions';
import { fetchTodos } from '../api/todoAPI';
import TodoList from '../components/TodoList';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';

const Home = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector(state => state);

  useEffect(() => {
    const loadTodos = async () => {
      dispatch(setLoading(true));
      try {
        const data = await fetchTodos();
        data.forEach(todo => dispatch(addTodo(todo)));
      } catch (err) {
        dispatch(setError('Failed to fetch todos'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadTodos();
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSearch = (query) => {
    // Implement search logic
  };

  const handleFilter = (status) => {
    // Implement filter logic
  };

  return (
    <ErrorBoundary>
      <h2>Todo List</h2>
      {isLoading && <LoadingSpinner />}
      {error && <div className="error">{error}</div>}
      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilter={handleFilter} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </ErrorBoundary>
  );
};

export default Home;
