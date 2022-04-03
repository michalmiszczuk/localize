import React from 'react';
import { Map, Marker } from "pigeon-maps"


function LocalizeMap({ gridPosition, header, location }) {

    if (!location && header === "my location") return <div className={`${gridPosition} map__container`}>waiting data...</div>
    if (!location && header === "last search") return <div className={`${gridPosition} map__container`}><span className='loading-animation'>waiting for</span></div>

    const coords = [location.latitude, location.longitude]

    return (

        <div className={`${gridPosition} map__container`} data-header="My location">
            <Map center={coords} defaultZoom={12}>
                <Marker width={50} anchor={coords} />
            </Map>
        </div>
    );
}

export default LocalizeMap;