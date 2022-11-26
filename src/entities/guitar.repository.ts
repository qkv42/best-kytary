import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guitars } from 'src/entities/guitar.entity';

type ExampleDB = {
  id: string;
  value: string;
};

@Injectable()
export class GuitarsRepository {
  constructor(
    @InjectRepository(Guitars)
    private repository: Repository<Guitars>,
  ) {}

  findAll(): Promise<Guitars[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Guitars> {
    return this.repository.findOneBy({ id });
  }

  async createOne(params: ExampleDB): Promise<Guitars> {
    return this.repository.save(params);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: string, params: any): Promise<void> {
    await this.repository.update(id, params);
  }
}
