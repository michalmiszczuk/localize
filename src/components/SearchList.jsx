import React from 'react';

function SearchList({ searchList }) {

    console.log(searchList)

    if (searchList.length === 0) return <div className='search-list'>No searches yet</div>

    return (
        <div className='search-list'>
            <h2>List of all searches:</h2>
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