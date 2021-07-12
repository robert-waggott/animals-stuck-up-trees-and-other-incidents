import { GeocodingService } from "./services/geocoding.service";
import { ConfigController } from "./config.controller";
import { IncidentsMapController } from "./incidents-map.controller";
import { IncidentsService } from "./services/incidents.service";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { IncidentsController } from "./incidents.controller";
import { AppService } from "./services/app.service";
import { IncidentController } from "./incident.controller";
import { LocationSearchController } from "./location-search.controller";

@Module({
    imports: [],
    controllers: [
        AppController,
        IncidentController,
        IncidentsController,
        IncidentsMapController,
        ConfigController,
        LocationSearchController
    ],
    providers: [AppService, IncidentsService, GeocodingService]
})
export class AppModule {}
