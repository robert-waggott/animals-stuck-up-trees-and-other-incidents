import React, { MutableRefObject } from "react";
import maplibregl, { LngLatLike } from "maplibre-gl";

export interface DetailMapProps {
    latLng: { 
        lat?: number | null, 
        lng?: number | null
    };
}

export const DetailMap = (props: DetailMapProps) => {
    const mapRef = React.useRef() as MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
        if (props.latLng.lat && props.latLng.lng) {
            const map = new maplibregl.Map({
                container: mapRef.current,
                style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
                center: [props.latLng.lng, props.latLng.lat],
                zoom: 16
            });

            // todo: add marker. 
        }
    }, [props.latLng]);

    return (
        <>
            <div ref={mapRef} id="detail-map" style={{ width: "100%", height: "250px" }} />
        </>
    );
};
