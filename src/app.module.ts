import { Module } from '@nestjs/common';
import { GuitarService } from './services/guitar.service';
import { BassService } from './services/bass.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from './entities/example.entity';
import { ExampleModule } from './entities/example.module';
import { BassController } from './controllers/bass.controller';
import { GuitarController } from './controllers/guitar.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      //TODO no in github
      password: 'kytara',
      database: 'best-kytary',
      entities: [Example],
      synchronize: true,
    }),

    ExampleModule,
  ],
  controllers: [GuitarController, BassController],
  providers: [GuitarService, BassService],
})
export class AppModule {}
