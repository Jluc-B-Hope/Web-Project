import React from 'react';

const FilterBar = ({ setFilter }) => {
  return (
    <div className="filter-bar">
      <select onChange={e => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterBar;
