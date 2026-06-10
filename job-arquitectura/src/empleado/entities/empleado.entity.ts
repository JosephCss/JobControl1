import{Column, Entity,PrimaryGeneratedColumn} from 'typeorm';

@Entity('empleado')
export class Empleado {

  @PrimaryGeneratedColumn()
  id_empleado!: number;

  @Column({ length: 50 })
  nombre!: string;

  @Column({ length: 50 })
  apellido!: string;

  @Column({ length: 15 })
  telefono!: string;

  @Column({ length: 15 })
  cedula!: string;

  @Column({ length: 100 })
  correo!: string;

  @Column('numeric', {
    precision: 10,
    scale: 2
  })
  salario!: number;

  @Column()
  id_cargo!: number;

  @Column()
  id_departamento!: number;
}
