import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className='search-bar__container item item4'>
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.currentTarget.value)} />
            <button onClick={() => onSearch(searchQuery)}>SEARCH</button>
        </div>
    );
}

export default SearchBar;