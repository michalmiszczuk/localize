import React from 'react';
import { Map, Marker } from "pigeon-maps"


function LocalizeMap({ gridPosition, header, location, fallbackMsg }) {

    if (!location) return (
        <div className={`map__container ${gridPosition}`}>
            <span className='loading-animation'>{fallbackMsg}</span>
        </div>
    )
    const coords = [location.latitude, location.longitude]

    return (

        <div className={`${gridPosition} map__container`} data-header={header}>
            <Map center={coords} defaultZoom={12}>
                <Marker width={50} anchor={coords} />
            </Map>
        </div>
    );
}

export default LocalizeMap;