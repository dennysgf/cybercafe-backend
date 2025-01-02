import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from '../services/index';
import { Usuario } from '../entitys/index';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuariosService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Usuario>): Promise<any> {
    return this.usuariosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<any> {
    return this.usuariosService.remove(id);
  }
}
