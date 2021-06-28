import { IncidentsService } from './services/incidents.service';
import { Controller, Get } from '@nestjs/common';
import { Incident } from './interfaces/incident.interface';

@Controller("Incidents")
export class IncidentsController {
    constructor(private readonly incidentsService: IncidentsService) { }

    @Get()
    getIncidents(): Incident[] {
        return this.incidentsService.getIncidents();
    }
}
