import React from 'react';

function SearchList({ searchList }) {


    if (searchList.length === 0) return <div className='search-list__container'>No searches yet</div>


    return (
        <div className='search-list__container'>
            <h2>List of all searches:</h2>
            {searchList.map(item => {
                return (
                    <ul key={item.ip}>
                        <li>{item.query}</li>
                    </ul>
                )
            })}
        </div>
    );
}

export default SearchList;