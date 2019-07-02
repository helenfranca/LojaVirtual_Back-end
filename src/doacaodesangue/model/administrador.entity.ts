import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { Hemocentro } from './hemocentro.entity';

@Entity()
export class Administrador extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, nullable: false })
  matricula: string;

  @OneToOne(type => Pessoa, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  pessoa: Pessoa;

  @OneToOne(type => Hemocentro, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  hemocentro: Hemocentro;
}
