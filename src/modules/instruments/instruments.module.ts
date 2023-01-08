import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuitarController } from 'src/modules/instruments/guitar.controller';
import { GuitarService } from 'src/modules/instruments/guitar.service';
import { Guitars } from './guitar.entity';
import { GuitarsRepository } from './guitar.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Guitars])],
  providers: [GuitarsRepository, GuitarService],
  controllers: [GuitarController],
})
export class InstrumentsModule {}
