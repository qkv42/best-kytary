import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from '../../entities_example/example.entity';
import { ExampleModule } from '../../entities_example/example.module';
import { Guitars } from '../instruments/guitar.entity';
import { InstrumentsModule } from '../instruments/instruments.module';

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
