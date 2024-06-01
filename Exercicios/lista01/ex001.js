class Pessoa {
    constructor(nome, diaNascimento, mesNascimento, anoNascimento)
    {
        this.nome = nome;
        this.diaNascimento = diaNascimento;
        this.mesNascimento = mesNascimento;
        this.anoNascimento = anoNascimento;
        this.idade = 0;
    }

    calculaIdade (diaAtual, mesAtual, anoAtual)
    {
        this.diaAtual = diaAtual;
        this.mesAtual = mesAtual;
        this.anoAtual = anoAtual;
        this.idade = anoAtual - this.anoNascimento;
        if (mesAtual < this.mesNascimento || (mesAtual < this.mesNascimento && diaAtual < this.diaNascimento))
            {
                this.idade = this.idade - 1;
            }
    }

    informaIdade ()
    {
        console.log("Tenho " + this.idade + " Anos!");
    }

    informaNome ()
    {
        console.log("Prazer, sou o " + this.nome + "!");
    }

    
}

let pedro = new Pessoa("Pedro", 12, 9, 2005);

pedro.calculaIdade(31, 6, 2024);
pedro.informaNome();
pedro.informaIdade();