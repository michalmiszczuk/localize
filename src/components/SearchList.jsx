import React from 'react';

function SearchList({ searchList }) {

    if (searchList.length === 0) return <div className='search-list'>No searches yet</div>

    return (
        <div className='search-list'>
            <h1>List of all searches:</h1>
            {searchList.map(item => {
                return (
                    <ul key={item.id}>
                        <li>{item.query}</li>
                    </ul>
                )
            })}
        </div>
    );
}

export default SearchList;