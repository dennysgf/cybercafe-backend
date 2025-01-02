import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('administradores')
export class Administrador {
  @PrimaryGeneratedColumn()
  adminId: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  contraseña: string;

  @Column({ type: 'enum', enum: ['superadmin', 'admin', 'operador'] })
  rol: 'superadmin' | 'admin' | 'operador';

  @CreateDateColumn()
  fechaRegistro: Date;
}
