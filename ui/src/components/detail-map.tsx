import React, { MutableRefObject } from "react";
import maplibregl from "maplibre-gl";
import { ConfigContext } from "../pages/map";

export interface DetailMapProps {
    latLng: {
        lat?: number | null,
        lng?: number | null
    };
}

export const DetailMap = (props: DetailMapProps) => {
    const mapRef = React.useRef() as MutableRefObject<HTMLDivElement>;
    const config = React.useContext(ConfigContext);

    React.useEffect(() => {
        if (props.latLng.lat && props.latLng.lng) {
            const map = new maplibregl.Map({
                container: mapRef.current,
                style: `https://api.maptiler.com/maps/streets/style.json?key=${config?.MapTilerAPIKey}`,
                center: [props.latLng.lng, props.latLng.lat],
                zoom: 16
            });

            map.on("load", () => {
                map.addSource('incidents', {
                    'type': 'geojson',
                    'data': {
                        type: 'FeatureCollection',
                        features: [{
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [props.latLng.lng!, props.latLng.lat!]
                            },
                            properties: {}
                        }]
                    }
                });

                map.addLayer({
                    'id': 'incidents-point',
                    'type': 'circle',
                    'source': 'incidents',
                    'paint': {
                        'circle-radius': 10,
                        'circle-color': 'rgb(178,24,43)',
                        'circle-stroke-color': 'white',
                        'circle-stroke-width': 1,
                        'circle-opacity': 1
                    }
                });
            });
        }
    }, [props.latLng]);

    return (
        <>
            <div ref={mapRef} id="detail-map" style={{ width: "100%", height: "250px" }} />
        </>
    );
};
