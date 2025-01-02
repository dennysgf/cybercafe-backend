import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TransaccionesService } from '../services/index';
import { Transaccion } from '../entitys/index';

@Controller('transacciones')
export class TransaccionesController {
  constructor(private readonly transaccionesService: TransaccionesService) {}

  @Get()
  findAll(): Promise<Transaccion[]> {
    return this.transaccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Transaccion> {
    return this.transaccionesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Transaccion>): Promise<Transaccion> {
    return this.transaccionesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Transaccion>): Promise<any> {
    return this.transaccionesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<any> {
    return this.transaccionesService.remove(id);
  }
}
