import React, { useEffect, useState } from 'react';
import validateQuery from '../validation/joi';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('')

    const { error } = validateQuery(searchQuery)


    console.log(error)
    return (
        <div className='search-bar'>
            <div className='search-bar__input-box'>
                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.currentTarget.value)}
                    placeholder="Type ip or domain..."
                />
                {error && <div className='search-bar__input-box-validation-error'>You must enter valid IP or URL</div>}
            </div>
            <button className='btn search-bar__btn' onClick={() => onSearch(searchQuery)} disabled={error || searchQuery === ''}>SEARCH</button>
        </div>
    );
}

export default SearchBar;