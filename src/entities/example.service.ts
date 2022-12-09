import { Injectable } from '@nestjs/common';
import { ExampleRepository } from 'src/entities/example.repository';
import { Example } from './example.entity';

@Injectable()
export class ExampleService {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  getExampleById(id?: string): Promise<Example> {
    return this.exampleRepository.findOne(id);
  }

  createExample(params: any): Promise<Example> {
    return this.exampleRepository.createOne(params);
  }

  deleteExample(id: string): Promise<void> {
    return this.exampleRepository.remove(id);
  }

  updateExample(id: string, params: any): Promise<void> {
    return this.exampleRepository.update(id, params);
  }
}
