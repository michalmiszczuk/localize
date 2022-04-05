import React, { useEffect, useState } from 'react';
import validateQuery from '../validation/joi';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [error, setError] = useState('')

    const validate = (input) => {
        const { error } = validateQuery(input)
        setError(error)
    }


    console.log(error)
    return (
        <div className='search-bar'>
            <div className='search-bar__input-box'>
                <input
                    onFocus={validate}
                    onBlur={() => (setSearchQuery(''), setError(''))}
                    value={searchQuery}
                    onChange={(e) => (setSearchQuery(e.currentTarget.value), validate(searchQuery))}
                    placeholder="Type ip or domain..."
                />
                {error && <div className='search-bar__input-box-validation-error'>You must enter valid IP or URL</div>}
            </div>
            <button className='btn search-bar__btn' onClick={() => onSearch(searchQuery)} disabled={error}>SEARCH</button>
        </div>
    );
}

export default SearchBar;