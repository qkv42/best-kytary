import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  HttpCode,
  Patch,
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
    await this.exampleService.deleteExample(id);
  }

  @Patch('/example/:id')
  @HttpCode(202)
  updateExample(@Body() id: string, params: any): any {
    const updatedExample = this.exampleService.updateExample(id, params);
    return updatedExample;
  }
}
