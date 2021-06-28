import { IncidentsService } from './services/incidents.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IncidentsController } from './incidents.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController, IncidentsController],
  providers: [AppService, IncidentsService],
})
export class AppModule {}
