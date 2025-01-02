import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('usuarios') // Nombre de la tabla
export class Usuario {
  @PrimaryGeneratedColumn()
  usuarioId: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ type: 'enum', enum: ['cliente', 'operador'] })
  tipo: 'cliente' | 'operador';

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  telefono: string;

  @CreateDateColumn()
  fechaRegistro: Date;
}
