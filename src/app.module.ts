import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { GuitarService } from './services/guitar.service';
import { BassService } from './services/bass.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kytara',
      database: 'best-kytary',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [GuitarService, BassService],
})
export class AppModule {}
