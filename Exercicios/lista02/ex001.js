class Funcionarios {
    static nextId = 1; 

    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.impostoDeRenda = 7.5;
        this.id = Funcionarios.nextId++; 
    }

    calculaSalario() {
        this.desconto = (this.salario / 100) * this.impostoDeRenda;
        console.log("----------------------------------------");
        console.log("Informações pessoais");
        console.log("----------------------------------------");
        console.log("Id Funcionario: " + this.id + "\nNome Funcionario: " + this.nome + "\nCargo Funcionario: " + this.cargo);
        console.log("----------------------------------------");
        console.log("Salário Bruto: " + this.salario);
        console.log("Imposto de Renda: " + this.impostoDeRenda + "%");
        console.log("Valor descontado: " + this.desconto);
        console.log("Valor Liquido: " + (this.salario - this.desconto));
    }
}

class Gerente extends Funcionarios {
    constructor(nome, cargo, salario, quantidadeFuncionarios) {
        super(nome, cargo, salario);
        this.quantidadeFuncionarios = quantidadeFuncionarios;
        this.impostoDeRenda = 14;
    }

    calculaSalario() {
        this.desconto = (this.salario / 100) * this.impostoDeRenda;
        console.log("----------------------------------------");
        console.log("Informações pessoais");
        console.log("----------------------------------------");
        console.log("Id Funcionario: " + this.id + "\nNome Funcionario: " + this.nome + "\nCargo Funcionario: " + this.cargo + "\nFuncionarios Comandados: " + this.quantidadeFuncionarios);
        console.log("----------------------------------------");
        console.log("Salário Bruto: " + this.salario);
        console.log("Imposto de Renda: " + this.impostoDeRenda + "%");
        console.log("Valor descontado: " + this.desconto);
        console.log("Valor Liquido: " + (this.salario - this.desconto));
    }
}

let carlos = new Funcionarios("Carlos Pereira", "Chapeiro", 2300);
carlos.calculaSalario();

console.log("\n");

let raphael = new Gerente("Raphael", "Gerente", 4800, 15);
raphael.calculaSalario();
