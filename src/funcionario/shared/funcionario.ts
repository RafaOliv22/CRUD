import { Document } from 'mongoose';

export class Funcionario extends Document {
    nome: String;
    sobrenome: String;
    cpf: String;
    Funcao:String;
    endereco:String;
    salario:String
}
