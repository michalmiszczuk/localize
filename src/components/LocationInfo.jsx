import React from 'react';

function LocationInfo({ location, gridPosition, header, fallbackMsg }) {

    if (!location) return (
        <div className={`location-info ${gridPosition}`}>
            <span className='loading-animation'>{fallbackMsg}</span>
        </div>
    )
    return (
        <div className={`location-info ${gridPosition}`}>
            <h1>{header}</h1>
            <ul>
                <li>Continent: {location.continent_name}</li>
                <li>Country: {location.country_name}</li>
                <li>City: {location.city}</li>
                <li>Zip: {location.zip}</li>
                <li>IP: {location.ip}</li>
            </ul>
        </div>
    );
}

export default LocationInfo;