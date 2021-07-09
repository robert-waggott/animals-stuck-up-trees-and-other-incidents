import { FeatureCollection, Point } from "geojson";
import { BaseService } from "./base-service";

export interface IncidentsFeatureCollection extends FeatureCollection<Point> {
}

export class IncidentsService extends BaseService {
    async getIncident(incidentNumber: string) {
        return await this.get(`http://localhost:3001/incident/${incidentNumber}`);
    }

    async getIncidentsAsGeoJson(): Promise<IncidentsFeatureCollection> {
        return await this.get("http://localhost:3001/incidentsmap");
    }
}
