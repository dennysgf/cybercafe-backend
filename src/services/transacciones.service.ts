import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaccion } from '../entitys/index';

@Injectable()
export class TransaccionesService {
  constructor(
    @InjectRepository(Transaccion)
    private readonly transaccionRepository: Repository<Transaccion>,
  ) {}

  findAll(): Promise<Transaccion[]> {
    return this.transaccionRepository.find({ relations: ['usuario'] });
  }

  findOne(id: number): Promise<Transaccion> {
    return this.transaccionRepository.findOne({
      where: { transaccionId: id },
      relations: ['usuario'],
    });
  }

  create(data: Partial<Transaccion>): Promise<Transaccion> {
    const transaccion = this.transaccionRepository.create(data);
    return this.transaccionRepository.save(transaccion);
  }

  update(id: number, data: Partial<Transaccion>): Promise<any> {
    return this.transaccionRepository.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.transaccionRepository.delete(id);
  }
}
