import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('transacciones')
export class Transaccion {
  @PrimaryGeneratedColumn()
  transaccionId: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioId)
  @JoinColumn({ name: 'usuarioId' }) // Llave foránea
  usuario: Usuario;

  @Column()
  fecha: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  monto: number;

  @Column({ type: 'enum', enum: ['sesión', 'producto', 'impresión'] })
  tipo: 'sesión' | 'producto' | 'impresión';
}
