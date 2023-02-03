import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guitars } from 'src/modules/instruments/guitar.entity';
import { GuitarsFindParams } from './guitar.controller';
@Injectable()
export class GuitarsRepository {
  constructor(
    @InjectRepository(Guitars)
    private repository: Repository<Guitars>,
  ) {}

  findOne(id: number): Promise<Guitars> {
    return this.repository.findOneBy({ id });
  }

  findAll(): Promise<Guitars[]> {
    return this.repository.find();
  }

  findSome(params: GuitarsFindParams): Promise<Guitars[]> {
    return this.repository.find({
      where: {
        shape: params.shape,
        material: params.material,
      },
    });
  }

  findByShape(shape: string): Promise<Guitars[]> {
    return this.repository.find({ where: { shape } });
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

  async truncate(): Promise<void> {
    return this.repository.clear();
  }
}
