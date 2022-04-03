import React from 'react';

function LocationInfo({ location, gridPosition, header, fallbackMsg }) {

    if (!location) return (
        <div className={`location-info__container ${gridPosition}`}>
            <span className='loading-animation'>{fallbackMsg}</span>
        </div>
    )
    return (
        <div className={`location-info__container ${gridPosition}`}>
            <h2>{header}</h2>
            <ul>
                <li>Continent: {location.continent_name}</li>
                <li>Country: {location.country_name}</li>
                <li>City: {location.city}</li>
                <li>Zip: {location.zip}</li>
                <li>ip: {location.ip}</li>
            </ul>
        </div>
    );
}

export default LocationInfo;