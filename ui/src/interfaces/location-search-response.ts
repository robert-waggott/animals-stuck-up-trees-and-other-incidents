export interface LocationSearchResponse {
    mapboxAPIKey: string;
    attribution: string;
    results: LocationSearchResult[];
}

export interface LocationSearchResult {
    name: string;
    description: string;
    type: string;
    center: { lat: number; lng: number };
    relevance: number;
}
