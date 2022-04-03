import React from 'react';

function SearchList({ searchListf }) {


    // if (searchList.length === 0) return <div className='search-list__container'>waiting for data...</div>

    const searchList = [{ ip: "212.77.98.9", country_name: 'Poland', continent_name: "Europe", zip: "80-009" }]
    return (
        <div className='search-list__container'>
            <ul>
                {searchList.map(item => {
                    <>
                        <li>{item.ip}</li>
                        <li>{item.country_name}</li>
                        <li>{item}</li>
                        <li>{item}</li>
                    </>

                })}
            </ul>
        </div>
    );
}

export default SearchList;