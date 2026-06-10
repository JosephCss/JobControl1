import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';

@Controller('empleado')
export class EmpleadoController {

    constructor(private empleadoService: EmpleadoService){}
    
    @Get()
    async funListar(){
        let empleados = await this.empleadoService.findAll();
        return empleados;
    }
    
    @Post()
    async funRegistrar(@Body() emp){
        let respuesta = await this.empleadoService.create(emp);
        return respuesta;   
    }
    
    @Get(':id')
    async funObtener(@Param('id') id){
        const empleado = await this.empleadoService.findOne(+id);
        if (!empleado) {
            return { error: 'Empleado no encontrado', statusCode: 404 };
        }
        return empleado;
    }

    @Put(':id')
    async funActualizar(@Param('id') id, @Body() emp){
        const resultado = await this.empleadoService.update(+id, emp);
        if (!resultado) {
            return { error: 'Empleado no encontrado', statusCode: 404 };
        }
        return resultado;
    }
    
    @Delete(':id')
    async funEliminar(@Param('id') id){
        const resultado = await this.empleadoService.delete(+id);
        if (!resultado) {
            return { error: 'Empleado no encontrado', statusCode: 404 };
        }
        return resultado;
    }

}
