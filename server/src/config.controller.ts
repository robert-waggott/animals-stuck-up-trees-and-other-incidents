import { IncidentsService } from "./services/incidents.service";
import { Controller, Get } from "@nestjs/common";
import { Incident } from "./interfaces/incident.interface";
import { Config } from "./interfaces/config.interface";

@Controller("Config")
export class ConfigController {
    constructor() {}

    @Get()
    getConfig(): Config {
        return { MapTilerAPIKey: process.env.MAPTILERAPIKEY };
    }
}
