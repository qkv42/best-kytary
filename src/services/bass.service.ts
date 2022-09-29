import { Injectable } from '@nestjs/common';
import { Bass } from 'src/interface';
import { basses } from 'src/mocks/basses';

@Injectable()
export class BassService {
  getBassById(id?: number): Bass {
    const foundBass = basses.find((bass) => bass.id == id);
    console.log(foundBass);
    return foundBass;
  }

  getBasses(): Bass[] {
    return basses;
  }
}
