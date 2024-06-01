class contador {
    constructor (nome, valorContador){
        this.nome = nome;
        this.valorContador = valorContador;
        this.default = valorContador;
    }

    valorAtual ()
    {
        console.log("Valor Atual do Contador " + this.nome + " = " + this.valorContador);
    }

    incremento (valorIncrementado)
    {
        this.valorIncrementado = valorIncrementado;
        this.valorContador = this.valorContador + valorIncrementado;
        console.log("Valor " + this.valorIncrementado + " Adicionado ao seu Contador!!");
        console.log("Valor Atual do Contador " + this.nome + " = " + this.valorContador);
    }

    zerar ()
    {
        this.valorContador = 0;
        console.log("Contador " + this.nome + " foi Redefinido para " + this.valorContador);
    }
}

let timeA = new contador("Time A", 0);
timeA.valorAtual();
timeA.incremento(5);
timeA.zerar();

console.log("\n");

let timeB =  new contador("Time B", 10);
timeB.valorAtual();
timeB.incremento(1);
timeB.zerar();