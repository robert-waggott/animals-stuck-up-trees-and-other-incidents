import { FeatureCollection, Point } from "geojson";
import { BaseService } from "./base-service";

export interface IncidentsFeatureCollection extends FeatureCollection<Point> {
}

export class IncidentsService extends BaseService {
    constructor() {
        super();
    }

    async getIncident(incidentNumber: string) {
        const response = await this.get(`http://localhost:3001/incident/${incidentNumber}`);
        const incident = await response.json();

        return incident;
    }

    async getIncidentsAsGeoJson(): Promise<IncidentsFeatureCollection> {
        const response = await this.get("http://localhost:3001/incidentsmap");
        const featureCollection = await response.json();

        return featureCollection;
    }
}
