import { Injectable } from '@nestjs/common';
import { GuitarsRepository } from 'src/modules/instruments/guitar.repository';
import { Guitars } from 'src/modules/instruments/guitar.entity';
import { guitars } from 'src/mocks/guitars';

@Injectable()
export class GuitarService {
  constructor(private readonly guitarsRepository: GuitarsRepository) {}

  getGuitarById(id?: number): Promise<Guitars> {
    // todo - opravit tohle == + pipes
    // const foundGuitar = guitars.find((guitar) => guitar.id == id);
    // return foundGuitar;
    return this.guitarsRepository.findOne(id);
  }

  getGuitars(): Promise<Guitars[]> {
    // return guitars;
    return this.guitarsRepository.findAll();
  }

  createGuitar(params: any): Promise<Guitars> {
    return this.guitarsRepository.createOne(params);
  }

  deleteGuitar(id: number): Promise<void> {
    return this.guitarsRepository.remove(id);
  }

  updateGuitar(id: number, params: any): Promise<void> {
    return this.guitarsRepository.update(id, params);
  }

  truncateAndCreateGuitars(): void {
    this.guitarsRepository.truncate();
    for (let i = 0; i < guitars.length; i++) {
      this.createGuitar(guitars[i]);
    }
  }
}
