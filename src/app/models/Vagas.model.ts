export class Vaga {
    id: number = 0;
    nome: String = "";
    foto: String = "";
    descricao: String = "";
    salario: number = 0

    constructor(id: number,nome: String,foto: String, descricao: String,salario: number){
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.descricao = descricao;
        this.salario = salario;
    }
}