import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Guitars } from 'src/entities/guitar.entity';
import { GuitarService } from 'src/services/guitar.service';
import { throwNotFoundError } from 'src/utils';

@Controller()
@ApiTags('Guitars')
export class GuitarController {
  constructor(private readonly guitarService: GuitarService) {}

  @Get('/guitar/:id')
  async getGuitarById(@Param('id') id: number): Promise<Guitars> {
    const guitar = await this.guitarService.getGuitarById(id);
    if (!guitar) {
      throwNotFoundError("Guitar with this ID doesn't exist.");
    }

    return guitar;
  }

  @Get('guitars')
  getGuitars(): Promise<Guitars[]> {
    return this.guitarService.getGuitars();
  }
}
