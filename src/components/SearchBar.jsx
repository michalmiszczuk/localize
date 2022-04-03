import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className='search-bar__container'>
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.currentTarget.value)} placeholder="Type ip or domain..." />
            <button className='btn search-btn' onClick={() => onSearch(searchQuery)}>SEARCH</button>
        </div>
    );
}

export default SearchBar;