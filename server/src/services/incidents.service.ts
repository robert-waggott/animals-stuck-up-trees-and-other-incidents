import { join } from "path";
import { readFileSync } from "fs";
import { Injectable } from '@nestjs/common';
import { Incident } from 'src/interfaces/incident.interface';
import * as parse from "csv-parse/lib/sync";

@Injectable()
export class IncidentsService {
    getHello(): Incident[] {
        const filename = join(__dirname, "../..", "data", "Animal Rescue incidents attended by LFB from Jan 2009 (1).csv");
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
            Latitude: raw.Latitude,
            Longitude: raw.Longitude
        }));

        return incidents;
    }
}
