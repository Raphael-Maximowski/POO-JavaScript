
class Livros {
    constructor (nomeLivro, autor, numPaginas)
    {
        this.nomeLivro = nomeLivro;
        this.autor = autor;
        this.numPaginas = numPaginas;
        this.disponibilidade = 1;
    }
}

class Pessoas {
    constructor (nomePessoa, endereco, email, telefone)
    {
        this.nomePessoa = nomePessoa;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
    }

    aluguel(livroAlugado, dias)
    {
        if (livroAlugado.disponibilidade == 1)
            {
                this.livroAlugado = livroAlugado
                this.dias = dias;

                // Info Livro
                console.log("\n" +this.livroAlugado.nomeLivro + " foi Alugado por " +
                    dias + " dias!")
                this.livroAlugado.disponibilidade = 0;

                // Info Cliente
                console.log("Dados Cliente: ");
                console.log("Nome: " + this.nomePessoa + "\nEndereço: " + this.endereco + "\nEmail: " + this.email + "\nTelefone: " + this.telefone);
            }
        else {
            console.log("Livro Indisponivel para Locação! Previsão de Retorno para " + this.dias + " dias!");
        }
    }

    devolver (livroAlugado)
    {
        this.livroAlugado = livroAlugado
        console.log(this.nomePessoa + " Devolveu o Livro " + this.livroAlugado.nomeLivro + ", Ele esta disponivel para locação!!");
        this.livroAlugado.disponibilidade = 0;
    }

}



let domQuixote = new Livros("Dom Quixote de La Mancha", "Miguel de Cervantes", 1033)
let metamorfose = new Livros ("Metamorfose", "Franz Kafka", 598)
let the1984 = new Livros ("1984", "George Orwell.", 651);
let miseraveis =  new Livros ("Os Miseráveis", "Victor Hugo", 923)
let solTodos = new Livros ("O Sol é Para Todos", "Harper Lee", 1238)

let livrosDisponiveis = [domQuixote.nomeLivro, metamorfose.nomeLivro, the1984.nomeLivro, miseraveis.nomeLivro, solTodos.nomeLivro];

console.log("Livros Disponiveis: ");
for (i = 0; i < 5; i++)
    {
        console.log("[" + `${i + 1}` +  "] " + livrosDisponiveis[i]);
    }

let victor =  new Pessoas ("Victor", "Rua 01", "n@n1.com", "42 91111.1111");
let pedro =  new Pessoas ("Pedro", "Rua 02", "n@n2.com", "42 92222.2222");
let raphael =  new Pessoas ("Raphael", "Rua 03", "n@n3.com", "42 93333.3333");
let joao =  new Pessoas ("João", "Rua 04", "n@n4.com", "42 94444.4444");
let carlos =  new Pessoas("Carlos", "Rua 05", "n@n5.com", "42 95555.5555");

// Alugueis 

victor.aluguel(domQuixote, 10);
pedro.aluguel(solTodos, 5);

console.log("\n");

victor.devolver(domQuixote);
pedro.devolver(solTodos);
