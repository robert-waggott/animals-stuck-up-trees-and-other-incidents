import { IncidentsMapController } from './incidents-map.controller';
import { IncidentsService } from './services/incidents.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IncidentsController } from './incidents.controller';
import { AppService } from './services/app.service';
import { IncidentController } from './incident.controller';

@Module({
  imports: [],
  controllers: [AppController, IncidentController, IncidentsController, IncidentsMapController],
  providers: [AppService, IncidentsService],
})
export class AppModule {}
