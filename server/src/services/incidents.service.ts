import { join } from "path";
import { readFileSync } from "fs";
import { Injectable } from '@nestjs/common';
import { Incident } from 'src/interfaces/incident.interface';
import { Feature, FeatureCollection, Point } from 'geojson';
import * as parse from "csv-parse/lib/sync";
import { BaseService } from "./base.service";

@Injectable()
export class IncidentsService extends BaseService {
    getIncident(id: number): Incident | undefined {
        return this.getIncidents().find(incident => incident.IncidentNumber === id);
    }

    getIncidents(): Incident[] {
        const filename = join(__dirname, "../..", "data", "Animal Rescue incidents attended by LFB from Jan 2009.csv");
        const fileContents = readFileSync(filename, "utf-8");

        const data = parse(fileContents, {
            columns: true,
            skip_empty_lines: true
        });

        const incidents: Incident[] = data.map((raw: any) => ({
            IncidentNumber: raw.IncidentNumber, 
            DateTime: raw.DateTimeOfCall,
            Type: raw.TypeOfIncident,
            PumpCount: raw.PumpCount,
            PumpHoursTotal: raw.PumpHoursTotal,
            Description: raw.FinalDescription,
            TypeOfAnumal: raw.AnimalGroupParent,
            Latitude: this.getNullSafeString(raw.Latitude),
            Longitude: this.getNullSafeString(raw.Longitude)
        }));

        return incidents;
    }

    getIncidentsAsGeoJson(): FeatureCollection<Point> {
        const incidents = this.getIncidents().filter(incident => incident.Latitude !== null && incident.Longitude !== null);

        return { 
            type: "FeatureCollection",
            features: incidents.map(incident => ({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [incident.Longitude, incident.Latitude]
                },
                properties: {
                    "id": incident.IncidentNumber,
                    "type": incident.Type
                }
            })) 
        };
    }
}
