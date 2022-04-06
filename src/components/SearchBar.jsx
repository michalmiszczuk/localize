import React, { useState } from 'react';
import validateQuery from '../validation/joi';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [isValidating, setIsValidating] = useState(false)

    const { error } = validateQuery(searchQuery)

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
                {error && isValidating && <div className='search-bar__input-box-validation-error'>You must enter valid IP or URL</div>}
            </div>
            <button className='btn search-bar__btn' onClick={() => onSearch(searchQuery)} disabled={error || searchQuery === ''}>SEARCH</button>
        </div>
    );
}

export default SearchBar;