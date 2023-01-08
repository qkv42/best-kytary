import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Example } from 'src/entities_example/example.entity';

export type ExampleDB = {
  id: string;
  value: string;
};

@Injectable()
export class ExampleRepository {
  constructor(
    @InjectRepository(Example)
    private repository: Repository<Example>,
  ) {}

  findAll(): Promise<Example[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Example> {
    return this.repository.findOneBy({ id });
  }

  async createOne(params: ExampleDB): Promise<Example> {
    return this.repository.save(params);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: string, params: any): Promise<void> {
    await this.repository.update(id, params);
  }
}
