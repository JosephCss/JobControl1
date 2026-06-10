import { Injectable } from '@nestjs/common';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';

@Injectable()
export class EmpleadoService {
    private empleado: any[] = [];
    constructor(@InjectRepository(Empleado) private readonly empleadoRepository: Repository<Empleado>){}

    async findAll(): Promise<any[]> {
        return await this.empleadoRepository.find();
    }

    async findOne(id: number): Promise<Empleado | null> {
        return await this.empleadoRepository.findOne({ where: { id_empleado: id } });
    }

    async create(emp: any) {
        const empleado = new Empleado();
        empleado.nombre = emp.nombre;
        empleado.apellido = emp.apellido;
        empleado.telefono = emp.telefono;
        empleado.cedula = emp.cedula;
        empleado.correo = emp.correo;
        empleado.salario = emp.salario;
        empleado.id_cargo = emp.id_cargo;
        empleado.id_departamento = emp.id_departamento;
        return await this.empleadoRepository.save(empleado);
    }

    async update(id: number, empleado: any): Promise<any> {
        const existeEmp = await this.empleadoRepository.findOne({ where: { id_empleado: id } });
        if (!existeEmp) {
            return null;
        }
        Object.assign(existeEmp, empleado);
        return await this.empleadoRepository.save(existeEmp);
    }

    async delete(id: number): Promise<any> {
        const empleado = await this.empleadoRepository.findOne({ where: { id_empleado: id } });
        if (!empleado) {
            return null;
        }
        return await this.empleadoRepository.remove(empleado);
    }

}
