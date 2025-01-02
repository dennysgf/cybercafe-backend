import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sesion } from '../entitys/index';

@Injectable()
export class SesionesService {
  constructor(
    @InjectRepository(Sesion)
    private readonly sesionRepository: Repository<Sesion>,
  ) {}

  findAll(): Promise<Sesion[]> {
    return this.sesionRepository.find({ relations: ['usuario', 'estacion'] });
  }

  findOne(id: number): Promise<Sesion> {
    return this.sesionRepository.findOne({
      where: { sesionId: id },
      relations: ['usuario', 'estacion'],
    });
  }

  create(data: Partial<Sesion>): Promise<Sesion> {
    const sesion = this.sesionRepository.create(data);
    return this.sesionRepository.save(sesion);
  }

  update(id: number, data: Partial<Sesion>): Promise<any> {
    return this.sesionRepository.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.sesionRepository.delete(id);
  }
}
