import { IncidentsService } from './services/incidents.service';
import { Controller, Get } from '@nestjs/common';
import { FeatureCollection, Point } from 'geojson';

@Controller("IncidentsMap")
export class IncidentsMapController {
    constructor(private readonly incidentsService: IncidentsService) { }

    @Get()
    getGeoJson(): FeatureCollection<Point> {
        return this.incidentsService.getIncidentsAsGeoJson();
    }
}
