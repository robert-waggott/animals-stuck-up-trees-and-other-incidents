import { LatLng } from "../interfaces/latlng";

export interface StaticMapProps {
    mapboxAPIKey: string;
    latLng: LatLng;
}

export const StaticMap = (props: StaticMapProps) => {
    return (
        <img
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ff0000(${props.latLng.lng},${props.latLng.lat})/${props.latLng.lng},${props.latLng.lat},12,0/300x100?access_token=${props.mapboxAPIKey}`}
        />
    );
};
