import React from 'react';

import { SearchField } from './index.styled';

const SearchInput = ({ query, onSearchSubmit, onQueryChange }) => {
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit();
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <SearchField type="search" id="search" name="search" value={query} onChange={onQueryChange} />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchInput;