import { FeatureCollection, Point } from "geojson";

export type IncidentsFeatureCollection = FeatureCollection<Point>;

export class IncidentsService {
    async getIncidentsAsGeoJson(): Promise<IncidentsFeatureCollection> {
        const response = await fetch("http://localhost:3000/incidentsmap", { method: "GET", mode: "cors", credentials: "same-origin" });
        const featureCollection = await response.json();

        return featureCollection;
    }
}
