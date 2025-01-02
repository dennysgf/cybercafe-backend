import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Estacion } from '../entitys/estacion.entity';

@Entity('sesiones')
export class Sesion {
  @PrimaryGeneratedColumn()
  sesionId: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioId)
  @JoinColumn({ name: 'usuarioId' }) // Llave foránea
  usuario: Usuario;

  @ManyToOne(() => Estacion, (estacion) => estacion.estacionId)
  @JoinColumn({ name: 'estacionId' }) // Llave foránea
  estacion: Estacion;

  @Column()
  horaInicio: Date;

  @Column({ nullable: true })
  horaFin: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  costo: number;
}
