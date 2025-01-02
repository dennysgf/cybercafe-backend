import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../entitys/index';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  findOne(id: number): Promise<Producto> {
    return this.productoRepository.findOneBy({ productoId: id });
  }

  create(data: Partial<Producto>): Promise<Producto> {
    const producto = this.productoRepository.create(data);
    return this.productoRepository.save(producto);
  }

  update(id: number, data: Partial<Producto>): Promise<any> {
    return this.productoRepository.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.productoRepository.delete(id);
  }
}
