import React from 'react';

function LocationInfo({ location, gridPosition, header }) {

    if (!location && header === 'my location:') return <div className={`location-info__container ${gridPosition}`}>waiting for data...</div>
    if (!location && header === 'last search:') return <div className={`location-info__container ${gridPosition}`}><span className='loading-animation'>waiting for search...</span></div>

    return (
        <div className={`location-info__container ${gridPosition}`}>
            <h2>{header}</h2>
            <ul>
                <li>Continent: {location.continent_name}</li>
                <li>Country: {location.country_name}</li>
                <li>City: {location.city}</li>
                <li>Zip: {location.zip}</li>
            </ul>
        </div>
    );
}

export default LocationInfo;