import React from 'react';

import { SearchField, SearchButton } from './index.styled';

const SearchInput = ({ query, onSearchSubmit, onQueryChange }) => {
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit();
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <SearchField type="search" id="search" name="search" placeholder="Search videos on YouTube" value={query} onChange={onQueryChange} />
      <SearchButton type="submit" class="btn btn-primary">Search</SearchButton>
    </form>
  );
}

export default SearchInput;