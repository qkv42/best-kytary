import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from './entities/example.entity';
import { ExampleModule } from './entities/example.module';
import { Guitars } from './entities/guitar.entity';
import { InstrumentsModule } from './entities/instruments.module';

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
      entities: [Example, Guitars],
      synchronize: true,
    }),

    ExampleModule,
    InstrumentsModule,
  ],
})
export class AppModule {}
