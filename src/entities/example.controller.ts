import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller()
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get('/example/:id')
  getExample(@Param('id') id: string): any {
    return this.exampleService.getExampleById(id);
  }

  @Post('/example')
  createExample(@Body() params: any): any {
    const createdExample = this.exampleService.createExample(params);
    return createdExample;
  }

  @Delete('/example/:id')
  @HttpCode(202)
  async deleteExample(@Param('id') id: string) {
    console.log('start');
    await this.exampleService.deleteExample(id);
    console.log('end');
  }
}
