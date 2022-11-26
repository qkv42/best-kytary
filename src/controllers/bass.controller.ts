import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Bass } from 'src/interface';
import { BassService } from 'src/services/bass.service';
import { throwNotFoundError } from 'src/utils';

@Controller()
@ApiTags('Basses')
export class BassController {
  constructor(private readonly bassService: BassService) {}

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
