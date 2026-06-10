import { Module } from '@nestjs/common';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { Empleado } from './entities/empleado.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado])],
  controllers: [EmpleadoController],
  providers: [EmpleadoService]
})
export class EmpleadoModule {}
