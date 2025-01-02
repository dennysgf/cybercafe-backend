import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estacion } from '../entitys/index';

@Injectable()
export class EstacionesService {
  constructor(
    @InjectRepository(Estacion)
    private readonly estacionRepository: Repository<Estacion>,
  ) {}

  findAll(): Promise<Estacion[]> {
    return this.estacionRepository.find();
  }

  findOne(id: number): Promise<Estacion> {
    return this.estacionRepository.findOneBy({ estacionId: id });
  }

  create(data: Partial<Estacion>): Promise<Estacion> {
    const estacion = this.estacionRepository.create(data);
    return this.estacionRepository.save(estacion);
  }

  update(id: number, data: Partial<Estacion>): Promise<any> {
    return this.estacionRepository.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.estacionRepository.delete(id);
  }
}
