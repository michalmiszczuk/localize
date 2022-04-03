import React from 'react';
import { Map, Marker } from "pigeon-maps"


function LocalizeMap({ gridPosition, header, location }) {

    if (!location && header === "my location") return <div className={`${gridPosition} map__container`}>waiting data...</div>
    if (!location && header === "last search") return <div className={`${gridPosition} map__container`}>waiting for your search</div>

    const coords = [location.latitude, location.longitude]

    return (

        <div className={`${gridPosition} map__container`}>
            <h2 className='map__header'>{header}</h2>
            <Map center={coords} defaultZoom={12}>
                <Marker width={50} anchor={coords} />
            </Map>
        </div>
    );
}

export default LocalizeMap;