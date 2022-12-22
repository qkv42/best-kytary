import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Guitars } from 'src/entities/guitar.entity';
import { Guitar } from 'src/interface';
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

  @Post('/guitar')
  async createGuitar(@Body() params: Guitar): Promise<Guitars> {
    const createdGuitar = await this.guitarService.createGuitar(params);
    return createdGuitar;
  }

  @Delete('/guitar/:id')
  @HttpCode(202)
  async deleteGuitar(@Param('id') id: number) {
    await this.guitarService.deleteGuitar(id);
  }

  @Patch('/guitar/:id')
  @HttpCode(202)
  updateGuitar(@Param('id') id: number, @Body() params: Guitar): Promise<void> {
    const updatedGuitar = this.guitarService.updateGuitar(id, params);
    return updatedGuitar;
  }

  @Post('/guitars/restore-mock-db')
  truncateAndCreateGuitars(): Promise<void> {
    return this.guitarService.truncateGuitars();
  }
}
