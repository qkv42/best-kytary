import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Guitar } from 'src/interface';
import { GuitarService } from 'src/services/guitar.service';
import { throwNotFoundError } from 'src/utils';

@Controller()
@ApiTags('Guitars')
export class GuitarController {
  constructor(private readonly guitarService: GuitarService) {}

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
}
