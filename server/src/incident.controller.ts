import { IncidentsService } from './services/incidents.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Incident } from './interfaces/incident.interface';

@Controller("Incident")
export class IncidentController {
    constructor(private readonly incidentsService: IncidentsService) { }

    @Get(":id")
    getIncident(@Param("id") id:number): Incident | undefined {
        return this.incidentsService.getIncident(id);
    }
}
