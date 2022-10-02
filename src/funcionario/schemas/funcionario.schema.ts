import * as mongoose from 'mongoose';

export const FuncionarioSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    cpf: String,
    Funcao:String,
    endereco:String,
    salario:String
})
