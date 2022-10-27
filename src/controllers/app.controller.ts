import { Controller, Get, Param } from '@nestjs/common';
import { GuitarService } from 'src/services/guitar.service';
import { Guitar, Bass } from 'src/interface';
import { BassService } from 'src/services/bass.service';
import { ApiTags } from '@nestjs/swagger';
import { throwNotFoundError } from 'src/utils';

@Controller()
@ApiTags('Guitars')
export class AppController {
  constructor(
    private readonly guitarService: GuitarService,
    private readonly bassService: BassService,
  ) {}

  @Get('/guitar/:id')
  getGuitarById(@Param('id') id: number) {
    const guitar = this.guitarService.getGuitarById(id);
    if (!guitar) {
      throwNotFoundError("Guitar with this ID doesn't exist.");
    }
    return guitar;
  }

  @Get('guitars')
  getGuitars(): Guitar[] {
    return this.guitarService.getGuitars();
  }

  @Get('/bass/:id')
  getBassById(@Param('id') id: number): Bass {
    const bass = this.bassService.getBassById(id);
    if (!bass) {
      throw throwNotFoundError("Bassguitar with this ID doesn't exist.");
    }
    return bass;
  }

  @Get('basses')
  getBasses(): Bass[] {
    return this.bassService.getBasses();
  }
}
