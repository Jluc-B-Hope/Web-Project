import React from 'react';
import { useDispatch } from 'react-redux';

const FilterBar = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch({ type: 'FILTER_TODO', payload: e.target.value });
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="active">Active</option>
    </select>
  );
};

export default FilterBar;
