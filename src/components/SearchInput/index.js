import React, { useState } from 'react';

import { SearchField } from './index.styled';

const SearchInput = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => setQuery(event.target.value);
  const handleSearchSubmit = (event) => event.preventDefault();

  return (
    <form onSubmit={handleSearchSubmit}>
      <SearchField type="search" id="search" name="search" value={query} onChange={handleQueryChange} />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchInput;