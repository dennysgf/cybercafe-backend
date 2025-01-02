import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SesionesService } from '../services/index';
import { Sesion } from '../entitys/index';

@Controller('sesiones')
export class SesionesController {
  constructor(private readonly sesionesService: SesionesService) {}

  @Get()
  findAll(): Promise<Sesion[]> {
    return this.sesionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Sesion> {
    return this.sesionesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Sesion>): Promise<Sesion> {
    return this.sesionesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Sesion>): Promise<any> {
    return this.sesionesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<any> {
    return this.sesionesService.remove(id);
  }
}
