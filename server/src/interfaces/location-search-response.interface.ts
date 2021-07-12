import { LatLng } from "./../dtos/latlng";

export interface LocationSearchResponse {
    mapboxAPIKey: string;
    attribution: string;
    results: LocationSearchResult[];
}

export interface LocationSearchResult {
    name: string;
    description: string;
    type: string;
    center: LatLng;
    relevance: number;
}
