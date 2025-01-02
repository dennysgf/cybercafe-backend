import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AdministradoresService } from '../services/index';
import { Administrador } from '../entitys/index';

@Controller('administradores')
export class AdministradoresController {
  constructor(private readonly administradoresService: AdministradoresService) {}

  @Get()
  findAll(): Promise<Administrador[]> {
    return this.administradoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Administrador> {
    return this.administradoresService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Administrador>): Promise<Administrador> {
    return this.administradoresService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Administrador>): Promise<any> {
    return this.administradoresService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<any> {
    return this.administradoresService.remove(id);
  }
}
