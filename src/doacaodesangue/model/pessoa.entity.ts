import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  Double,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Doacao } from './doacao.entity';
import { TipoSanguineo } from './tiposanguineo.entity';
import { Endereco } from './endereco.entity';
import { Compra } from './compra.entity';

export enum SexoEnum {
  Masculino = 'M',
  Feminino = 'F',
}

@Entity()
export class Pessoa extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  nome: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  sobrenome: string;

  @Column({ type: 'timestamp', nullable: false })
  datanascimento: Date;

  @Column({ type: 'varchar', length: 15, nullable: false, unique: true })
  cpf: string;

  @Column({ type: 'varchar', length: 1, nullable: false })
  sexo: SexoEnum;

  @Column({ type: 'varchar', length: 30, nullable: false })
  email: string;

  @Column({ type: 'bigint', nullable: false })
  telefone: number;

  @Column({ type: 'varchar', length: 10, nullable: false })
  senha: string;

  @OneToMany(type => Compra, compra => compra.id)
  compra: Compra[];

  @ManyToMany(type => Endereco)
  @JoinTable({
    name: 'pessoa_endereco',
    joinColumn: { name: 'idpessoa', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'idendereco', referencedColumnName: 'id' },
  })
  enderecos: Endereco[];
}