import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductosService } from '../services/index';
import { Producto } from '../entitys/index';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Producto> {
    return this.productosService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Producto>): Promise<Producto> {
    return this.productosService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Producto>): Promise<any> {
    return this.productosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<any> {
    return this.productosService.remove(id);
  }
}
