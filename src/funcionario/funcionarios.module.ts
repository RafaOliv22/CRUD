import { MongooseModule } from '@nestjs/mongoose';
import { FuncionarioService } from './shared/funcionario.service';
import { FuncionariosController } from './funcionarios.controller';
import { Module } from '@nestjs/common';
import { FuncionarioSchema } from './schemas/funcionario.schema'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Funcionario', schema: FuncionarioSchema }])
    ],
    controllers: [FuncionariosController],
    providers: [FuncionarioService]
})
export class TasksModule {}
