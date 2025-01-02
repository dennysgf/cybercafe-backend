import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ImpresionesService } from '../services/index';
import { Impresion } from '../entitys/index';

@Controller('impresiones')
export class ImpresionesController {
  constructor(private readonly impresionesService: ImpresionesService) {}

  @Get()
  findAll(): Promise<Impresion[]> {
    return this.impresionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Impresion> {
    return this.impresionesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Impresion>): Promise<Impresion> {
    return this.impresionesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Impresion>): Promise<any> {
    return this.impresionesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<any> {
    return this.impresionesService.remove(id);
  }
}
