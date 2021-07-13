import React, { MutableRefObject } from "react";
import maplibregl from "maplibre-gl";
import { IncidentsFeatureCollection } from "../services/incidents-service";
import { ConfigContext } from "../pages/map";
import { LatLng } from "../interfaces/latlng";

export interface MapProps {
    incidentsGeoJson?: IncidentsFeatureCollection;
    centerPoint?: LatLng | null;
    onPointClicked: (id: string) => unknown;
}

export const Map = (props: MapProps) => {
    const mapContainerRef = React.useRef() as MutableRefObject<HTMLDivElement>;
    const mapRef = React.useRef() as MutableRefObject<maplibregl.Map>;
    const incidentsGeoJson = props.incidentsGeoJson;
    const config = React.useContext(ConfigContext);

    React.useEffect(() => {
        if (!incidentsGeoJson || !config) {
            return;
        }

        mapRef.current = new maplibregl.Map({
            container: mapContainerRef.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${config?.MapTilerAPIKey}`,
            center: [-1.631291, 52.48278],
            zoom: 4
        });

        mapRef.current.on("load", () => {
            const latLngs = incidentsGeoJson.features.map((feature) => feature.geometry.coordinates as [number, number]);
            const bounds = new maplibregl.LngLatBounds();

            latLngs.forEach((latLng) => bounds.extend(latLng));

            mapRef.current.fitBounds(bounds, { padding: 30 });

            mapRef.current.addSource("incidents", {
                type: "geojson",
                data: incidentsGeoJson
            });

            mapRef.current.addLayer({
                id: "incidents-heat",
                type: "heatmap",
                source: "incidents",
                maxzoom: 14,
                paint: {
                    "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, 14, 3],
                    "heatmap-color": [
                        "interpolate",
                        ["linear"],
                        ["heatmap-density"],
                        0,
                        "rgba(33,102,172,0)",
                        0.2,
                        "rgb(103,169,207)",
                        0.4,
                        "rgb(209,229,240)",
                        0.6,
                        "rgb(253,219,199)",
                        0.8,
                        "rgb(239,138,98)",
                        1,
                        "rgb(178,24,43)"
                    ],
                    "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 14, 20],
                    "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 13, 1, 14, 0]
                }
            });

            mapRef.current.addLayer({
                id: "incidents-point",
                type: "circle",
                source: "incidents",
                minzoom: 13,
                paint: {
                    "circle-radius": 10,
                    "circle-color": "rgb(178,24,43)",
                    "circle-stroke-color": "white",
                    "circle-stroke-width": 1,
                    "circle-opacity": ["interpolate", ["linear"], ["zoom"], 13, 0, 14, 1]
                }
            });
        });

        mapRef.current.on("click", "incidents-point", (ev) => {
            if (ev.features && ev.features.length > 0) {
                props.onPointClicked(ev.features[0].properties!.id);
            }
        });

        mapRef.current.on("mouseenter", "incidents-point", () => {
            mapRef.current.getCanvas().style.cursor = "pointer";
        });

        mapRef.current.on("mouseleave", "incidents-point", () => {
            mapRef.current.getCanvas().style.cursor = "";
        });
    }, [incidentsGeoJson, config]);

    React.useEffect(() => {
        if (!props.centerPoint) {
            return;
        }

        mapRef.current.flyTo({
            center: props.centerPoint,
            zoom: 16,
            speed: 2
        });
    }, [props.centerPoint]);

    return <div ref={mapContainerRef} id="map" style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }} />;
};
