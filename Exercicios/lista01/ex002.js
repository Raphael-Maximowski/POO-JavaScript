class Universidade {
    constructor (nome)
    {
        this.nome = nome;
        this.associados = 0;
    }

    associandoUsuario ()
    {
        if (this.associados == 0)
            {
                console.log("Usuario Cadastrado!");
                this.associados++;
            }
        else if (this.associados > 0)
            {
                console.log("Vinculo Interrompido, Sem Vagas!");
            }
    }
}

class Pessoa {
    constructor (nomeUsuario, faculdade)
    {
        this.nomeUsuario = nomeUsuario;
        this.faculdade = faculdade;
    }
    escolha_faculdade ()
    {
        this.faculdade.associandoUsuario ();
    }

    saudacao ()
    {
        if (this.associados != 0)
            {
                console.log("Seja Bem vindo a " + this.faculdade.nome + " " + this.nomeUsuario + "!");
            }
    }
}

this.Pessoa =  new Universidade();

let harverd =  new Universidade("Harverd");
let cambrige = new Universidade("Cambridge");

let pedro = new Pessoa ("Pedro", harverd);
pedro.escolha_faculdade();
pedro.saudacao();

let joao = new Pessoa ("João", cambrige);
joao.escolha_faculdade();
joao.saudacao();

