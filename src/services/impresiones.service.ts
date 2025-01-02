import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Impresion } from '../entitys/index';

@Injectable()
export class ImpresionesService {
  constructor(
    @InjectRepository(Impresion)
    private readonly impresionRepository: Repository<Impresion>,
  ) {}

  findAll(): Promise<Impresion[]> {
    return this.impresionRepository.find({ relations: ['usuario'] });
  }

  findOne(id: number): Promise<Impresion> {
    return this.impresionRepository.findOne({
      where: { impresionId: id },
      relations: ['usuario'],
    });
  }

  create(data: Partial<Impresion>): Promise<Impresion> {
    const impresion = this.impresionRepository.create(data);
    return this.impresionRepository.save(impresion);
  }

  update(id: number, data: Partial<Impresion>): Promise<any> {
    return this.impresionRepository.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.impresionRepository.delete(id);
  }
}
