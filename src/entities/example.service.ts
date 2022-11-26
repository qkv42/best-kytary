import { Injectable } from '@nestjs/common';
import { ExampleRepository } from 'src/entities/example.repository';

@Injectable()
export class ExampleService {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  getExampleById(id?: string): any {
    return this.exampleRepository.findOne(id);
  }

  createExample(params: any): any {
    return this.exampleRepository.createOne(params);
  }

  deleteExample(id: string): Promise<void> {
    return this.exampleRepository.remove(id);
  }
}
