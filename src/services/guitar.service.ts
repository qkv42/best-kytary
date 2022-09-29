import { Injectable } from '@nestjs/common';
import { Guitar } from 'src/interface';
import { guitars } from 'src/mocks/guitars';

@Injectable()
export class GuitarService {
  getGuitarById(id?: number): Guitar {
    // todo - opravit tohle == + pipes
    const foundGuitar = guitars.find((guitar) => guitar.id == id);
    console.log(foundGuitar);
    return foundGuitar;
  }

  getGuitars(): Guitar[] {
    return guitars;
  }
}
