import React, { useEffect, useState } from 'react';
import validateQuery from '../validation/joi';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [isValidating, setIsValidating] = useState(false)

    const { error } = isValidating ? validateQuery(searchQuery) : '';

    return (
        <div className='search-bar'>
            <div className='search-bar__input-box'>
                <input
                    onFocus={() => setIsValidating(true)}
                    onBlur={() => setIsValidating(false)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.currentTarget.value)}
                    placeholder="Type ip or domain..."
                />
                {error && <div className='search-bar__input-box-validation-error'>You must enter valid IP or URL</div>}
            </div>
            <button className='btn search-bar__btn' onClick={() => onSearch(searchQuery)} disabled={error || !isValidating}>SEARCH</button>
        </div>
    );
}

export default SearchBar;