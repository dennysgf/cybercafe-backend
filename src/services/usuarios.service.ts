import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entitys/index';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ usuarioId: id });
  }

  create(data: Partial<Usuario>): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(data);
    return this.usuarioRepository.save(usuario);
  }

  update(id: number, data: Partial<Usuario>): Promise<any> {
    return this.usuarioRepository.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.usuarioRepository.delete(id);
  }
}
