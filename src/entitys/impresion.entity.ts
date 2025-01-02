import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('impresiones')
export class Impresion {
  @PrimaryGeneratedColumn()
  impresionId: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioId)
  @JoinColumn({ name: 'usuarioId' }) // Llave foránea
  usuario: Usuario;

  @Column({ length: 100 })
  documento: string;

  @Column()
  numeroPaginas: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  costo: number;

  @Column()
  fecha: Date;
}
