import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { GuitarService } from './services/guitar.service';
import { BassService } from './services/bass.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GuitarService, BassService],
})
export class AppModule {}
