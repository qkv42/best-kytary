import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guitars } from 'src/entities/guitar.entity';
@Injectable()
export class GuitarsRepository {
  constructor(
    @InjectRepository(Guitars)
    private repository: Repository<Guitars>,
  ) {}

  findAll(): Promise<Guitars[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Guitars> {
    return this.repository.findOneBy({ id });
  }

  async createOne(params: Guitars): Promise<Guitars> {
    return this.repository.save(params);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: number, params: any): Promise<void> {
    await this.repository.update(id, params);
  }
}
