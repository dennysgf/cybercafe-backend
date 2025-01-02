import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('estaciones')
export class Estacion {
  @PrimaryGeneratedColumn()
  estacionId: number;

  @Column({ type: 'enum', enum: ['disponible', 'ocupado', 'bloqueado'] })
  estado: 'disponible' | 'ocupado' | 'bloqueado';

  @Column({ length: 100 })
  ubicacion: string;

  @Column({ type: 'jsonb' }) // PostgreSQL soporta JSONB
  caracteristicas: Record<string, any>;
}
