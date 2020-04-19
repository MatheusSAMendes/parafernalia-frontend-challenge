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
      <button type="submit" class="btn btn-primary">
        <img src="" alt=""/>
      </button>
    </form>
  );
}

export default SearchInput;