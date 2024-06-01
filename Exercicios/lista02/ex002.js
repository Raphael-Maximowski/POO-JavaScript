class Objeto {
    constructor (largura, altura)
    {
        this.largura = largura;
        this.altura = altura;

    }

    calcArea ()
    {
        console.log("Calculando Áreas . . .");
    }
}

class Triangulo extends Objeto {
    constructor (largura, altura, tipo)
    {
        super(largura, altura)
        this.tipo = tipo;
    }

    calcArea ()
    {
        console.log("Área do Triangulo " + this.tipo + " é = " +
            ((this.largura * this.altura) / 2)
        );
    }
}

class Retangulo extends Objeto {
    constructor (largura, altura)
    {
        super(largura, altura)
    }

    Quadrado ()
    {
        if (this.largura == this.altura)
            {
                console.log("É um Quadrado!");
            }
        
        else {
            console.log("É um Retangulo!");
        }
    }

    calcArea ()
    {
        console.log("Área do Quadrado/Retangulo é = " + (this.altura * this.largura));
    }
}


let isosceles = new Triangulo(20, 5, "Isosceles");
isosceles.calcArea();

console.log("\n")

let quadrado =  new Retangulo (5, 5);
quadrado.Quadrado();
quadrado.calcArea();

let retangulo =  new Retangulo(5, 10);
retangulo.Quadrado();
retangulo.calcArea();



