import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch({ type: 'SEARCH_TODO', payload: e.target.value });
  };

  return (
    <input
      type="text"
      placeholder="Search todos"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
