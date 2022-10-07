import { Controller, Get, Param } from '@nestjs/common';
import { GuitarService } from 'src/services/guitar.service';
import { Guitar, Bass } from 'src/interface';
import { BassService } from 'src/services/bass.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Guitars')
export class AppController {
  // someService: any;
  constructor(
    private readonly guitarService: GuitarService,
    private readonly bassService: BassService,
  ) {}

  @Get('/guitar/:id')
  getGuitarById(@Param('id') id: number): Guitar {
    // console.log(id);
    return this.guitarService.getGuitarById(id);
  }

  @Get('guitars')
  getGuitars(): Guitar[] {
    return this.guitarService.getGuitars();
  }

  @Get('/bass/:id')
  getBassById(@Param('id') id: number): Bass {
    // console.log(id);
    return this.bassService.getBassById(id);
  }

  @Get('basses')
  getBasses(): Bass[] {
    return this.bassService.getBasses();
  }
}
