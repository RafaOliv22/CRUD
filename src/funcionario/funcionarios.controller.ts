import { FuncionarioService } from './shared/funcionario.service';
import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { Funcionario } from './shared/funcionario';

@Controller('funcionarios')
export class FuncionariosController {

    constructor(
        private FuncionarioService: FuncionarioService
    ) { }

    @Get()
    async getAll() : Promise<Funcionario[]> {
        return this.FuncionarioService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Funcionario> {
        return this.FuncionarioService.getById(id);
    }

    @Post()
    async create(@Body() task: Funcionario): Promise<Funcionario> {
        return this.FuncionarioService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() task: Funcionario): Promise<Funcionario> {
        return this.FuncionarioService.update(id, task);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.FuncionarioService.delete(id);
    }
}