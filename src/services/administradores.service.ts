import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from '../entitys/index';

@Injectable()
export class AdministradoresService {
  constructor(
    @InjectRepository(Administrador)
    private readonly administradorRepository: Repository<Administrador>,
  ) {}

  findAll(): Promise<Administrador[]> {
    return this.administradorRepository.find();
  }

  findOne(id: number): Promise<Administrador> {
    return this.administradorRepository.findOneBy({ adminId: id });
  }

  create(data: Partial<Administrador>): Promise<Administrador> {
    const admin = this.administradorRepository.create(data);
    return this.administradorRepository.save(admin);
  }

  update(id: number, data: Partial<Administrador>): Promise<any> {
    return this.administradorRepository.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.administradorRepository.delete(id);
  }
}
