import React, { MutableRefObject } from "react";
import maplibregl from "maplibre-gl";
import { IncidentsFeatureCollection } from "../services/incidents-service";

export interface MapProps {
    IncidentsGeoJson?: IncidentsFeatureCollection
}

export const Map = (props: MapProps) => {
    const mapRef = React.useRef() as MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
        const map = new maplibregl.Map({
            container: mapRef.current,
            style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
            center: [-1.631291, 52.482780],
            zoom: 4
        });

        map.on('load', () => {
            if (!props.IncidentsGeoJson) {
                return;
            }

            // Add a geojson point source.
            // Heatmap layers also work with a vector tile source.
            map.addSource('incidents', {
                'type': 'geojson',
                'data': props.IncidentsGeoJson
            });

            map.addLayer(
                {
                    'id': 'incidents-heat',
                    'type': 'heatmap',
                    'source': 'incidents',
                    'maxzoom': 14,
                    'paint': {
                        'heatmap-intensity': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            0,
                            1,
                            14,
                            3
                        ],
                        'heatmap-color': [
                            'interpolate',
                            ['linear'],
                            ['heatmap-density'],
                            0,
                            'rgba(33,102,172,0)',
                            0.2,
                            'rgb(103,169,207)',
                            0.4,
                            'rgb(209,229,240)',
                            0.6,
                            'rgb(253,219,199)',
                            0.8,
                            'rgb(239,138,98)',
                            1,
                            'rgb(178,24,43)'
                        ],
                        'heatmap-radius': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            0,
                            2,
                            14,
                            20
                        ],
                        'heatmap-opacity': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            13,
                            1,
                            14,
                            0
                        ]
                    }
                });


            map.addLayer(
                {
                    'id': 'incidents-point',
                    'type': 'circle',
                    'source': 'incidents',
                    'minzoom': 13,
                    'paint': {
                        'circle-radius': 10,
                        'circle-color': 'rgb(178,24,43)',
                        'circle-stroke-color': 'white',
                        'circle-stroke-width': 1,
                        'circle-opacity': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            13,
                            0,
                            14,
                            1
                        ]
                    }
                });
        });

        map.on("click", "incidents-point", (ev) => {
            if (ev.features && ev.features.length > 0) {
                console.log(ev.features[0]);
            }
        });

        map.on('mouseenter', 'incidents-point', () => {
            map.getCanvas().style.cursor = 'pointer';
        });
          
        map.on('mouseleave', 'incidents-point', () => {
            map.getCanvas().style.cursor = '';
        });         
    });

    return (
        <>
            <div ref={mapRef} id="map" style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }} />
        </>
    );
};
