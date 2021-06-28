import React, { MutableRefObject } from "react";
import maplibregl from "maplibre-gl";
import { IncidentsFeatureCollection } from "../services/incidents-service";

export interface MapProps {
    IncidentsGeoJson: IncidentsFeatureCollection
}

export const Map = () => {
    const mapRef = React.useRef() as MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
        new maplibregl.Map({
            container: mapRef.current,
            style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // stylesheet location
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom            
        });
    });
    
    return (
        <>
            <div ref={mapRef} id="map" style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }} />
        </>
    );
};
