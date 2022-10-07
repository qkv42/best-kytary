import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { GuitarService } from './services/guitar.service';
import { BassService } from './services/bass.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [GuitarService, BassService],
})
export class AppModule {}
