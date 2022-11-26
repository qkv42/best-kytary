import { Module } from '@nestjs/common';
import { ExampleRepository } from './example.repository';
import { ExampleController } from './example.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Example } from './example.entity';
import { ExampleService } from './example.service';

@Module({
  imports: [TypeOrmModule.forFeature([Example])],
  providers: [ExampleRepository, ExampleService], // todo  v dokumentaci se to
  controllers: [ExampleController],
})
export class ExampleModule {}
