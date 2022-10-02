import { Injectable } from '@nestjs/common';
import { Funcionario } from './funcionario';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FuncionarioService {
    
    constructor(@InjectModel('Funcionario') private readonly funcionarioModel: Model<Funcionario>) { }

    async getAll() {
        return await this.funcionarioModel.find().exec();
    }

    async getById(id: string) {
        return await this.funcionarioModel.findById(id).exec();
    }

    async create(funcionario: Funcionario) {
        const createdTask = new this.funcionarioModel(funcionario);
        return await createdTask.save();
    }

    async update(id: string, funcionario: Funcionario) {
        await this.funcionarioModel.updateOne({ _id: id }, funcionario).exec()
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.funcionarioModel.deleteOne({ _id: id }).exec();
    }
}
