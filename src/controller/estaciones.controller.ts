import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EstacionesService } from '../services/index';
import { Estacion }  from '../entitys/index';

@Controller('estaciones')
export class EstacionesController {
  constructor(private readonly estacionesService: EstacionesService) {}

  @Get()
  findAll(): Promise<Estacion[]> {
    return this.estacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Estacion> {
    return this.estacionesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Estacion>): Promise<Estacion> {
    return this.estacionesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Estacion>): Promise<any> {
    return this.estacionesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<any> {
    return this.estacionesService.remove(id);
  }
}
