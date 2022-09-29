import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { GuitarService } from 'src/services/guitar.service';
import { Guitar, Bass } from 'src/interface';
import { BassService } from 'src/services/bass.service';

@Controller()
export class AppController {
  someService: any;
  constructor(
    private readonly appService: AppService,
    private readonly guitarService: GuitarService,
    private readonly bassService: BassService,
  ) {}

  @Get('cojavim')
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('guitar')
  // getGuitar(): Guitar {
  //   return this.guitarService.getGuitar();
  // }

  @Get('/guitar/:id')
  getGuitarById(@Param('id') id: number): Guitar {
    // console.log(id);
    return this.guitarService.getGuitarById(id);
  }

  @Get('guitars')
  getGuitars(): Guitar[] {
    return this.guitarService.getGuitars();
  }

  // @Get('bass')
  // getBass(): Bass {
  //   return this.bassService.getBass();
  // }

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
