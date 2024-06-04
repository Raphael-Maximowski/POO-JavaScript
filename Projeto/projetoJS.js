const prompt = require('prompt-sync')();

class Humanos {
    constructor (nome, idade, endereco, contato, sexo)
    {
        this.nomeH = nome;
        this.idadeH = idade;
        this.enderecoH = endereco;
        this.contatoH = contato; 
        this.sexo = sexo 
    }

    infos ()
    {
        console.log("===============================");
        console.log("Informações Funcionários")
        console.log("===============================");
        console.log("Nome: " + this.nomeH)
        console.log("Idade: " + this.idadeH)
        console.log("Endereço: " + this.enderecoH)
        console.log("Contato: " + this.contatoH)
        console.log("Sexo: " + this.sexo);
        console.log("Data de Entrada na Empresa: " + this.entradaEmpresa)
        console.log("CPF: " + this.CPF);
        console.log("RG: " + this.RG);
        console.log("Salario: " + this.salario)
    }
}

class Funcionarios extends Humanos {
    constructor (nomeH, idadeH, enderecoH, contatoH, sexo, entradaEmpresa, CPF, RG, salario)
    {
        super(nomeH, idadeH, enderecoH, contatoH, sexo)
        this.entradaEmpresa = entradaEmpresa;
        this.CPF = CPF;
        this.RG = RG;
        this.salario =  salario;
    }
}

class Gerentes extends Funcionarios {
    constructor(nomeH, idadeH, enderecoH, contatoH, sexo, entradaEmpresa, CPF, RG, salario)
    {
        super(nomeH, idadeH, enderecoH, contatoH, sexo, entradaEmpresa, CPF, RG, salario)
    }
}

class Veterinarios extends Funcionarios {
    constructor (nomeH, idadeH, enderecoH, contatoH, sexo, entradaEmpresa, CPF, RG, salario)
    {
        super(nomeH, idadeH, enderecoH, contatoH, sexo, entradaEmpresa, CPF, RG)
        this.salario = 4000
    }
}

class Balconistas extends Funcionarios {
    constructor (nomeH, idadeH, enderecoH, contatoH, sexo, entradaEmpresa, CPF, RG, salario)
    {
        super(nomeH, idadeH, enderecoH, contatoH, sexo, entradaEmpresa, CPF, RG)
        this.salario = 2500
    }
}

class Vendedores extends Funcionarios {
    constructor (nomeH, idadeH, enderecoH, contatoH, sexo, entradaEmpresa, CPF, RG, salario)
    {
        super(nomeH, idadeH, enderecoH, contatoH, sexo, entradaEmpresa, CPF, RG)
        this.salario = 2500
    }
}

class Animais {
    constructor (nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida, dono)
    {
        this.nome = nome;
        this.raca = raca;
        this.quantidadePatas = quantidadePatas;
        this.cor = cor;
        this.peso = peso;
        this.tamanho = tamanho;
        this.dataChegada = dataChegada;
        this.previsaoSaida = previsaoSaida;
        this.dono = dono
    }

    apresentacao()
    {
        console.log("===============================");
        console.log("Dados do Animal")
        console.log("===============================");
        console.log("Nome: " + this.nome)
        console.log("Raça: " + this.raca);
        console.log("Quantidade de Patas: " + this.quantidadePatas);
        console.log("Cor: " + this.cor);
        console.log("Peso: " + this.peso);
        console.log("Tamanho: " + this.tamanho + "\nData Chegada: " + this.dataChegada + "\nPrevisão Saida: " + this.previsaoSaida);
        console.log("===============================");
    }

    interacao ()
    {}
}

class Cavalo extends Animais {
    constructor(nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida, dono) {
        super(nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida);
        this.dono = dono;
    }

    interacao() {
        console.log(this.nome + " Está Trotando pela Mata");
    }

    infoDono() {
        console.log("===============================");
        console.log("Dados do Dono");
        console.log("===============================\n");
        console.log("Nome: " + this.dono.nomeH);
        console.log("Idade: " + this.dono.idadeH);
        console.log("Endereço: " + this.dono.enderecoH);
        console.log("Contato: " + this.dono.contatoH);
    }
}

class Cachorro extends Animais {
    constructor(nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida, dono)
    {
        super(nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida);
        this.dono = dono;
    }

    interacao()
    {
        console.log(this.nome + " Está Latindo de Fome");
    }

    infoDono() {
        console.log("===============================");
        console.log("Dados do Dono");
        console.log("===============================\n");
        console.log("Nome: " + this.dono.nomeH);
        console.log("Idade: " + this.dono.idadeH);
        console.log("Endereço: " + this.dono.enderecoH);
        console.log("Contato: " + this.dono.contatoH);
    }
}

class Gato extends Animais {
    constructor(nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida, dono)
    {
        super(nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida);
        this.dono = dono;
    }

    interacao ()
    {
        console.log(this.nome + " Está Tomando Leite no seu Potinho!!");
    }

    infoDono() {
        console.log("===============================");
        console.log("Dados do Dono");
        console.log("===============================\n");
        console.log("Nome: " + this.dono.nomeH);
        console.log("Idade: " + this.dono.idadeH);
        console.log("Endereço: " + this.dono.enderecoH);
        console.log("Contato: " + this.dono.contatoH);
    }
}

class Passaros extends Animais {
    constructor(nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida, dono)
    {
        super(nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida);
        this.dono = dono;
    }

    interacao ()
    {
        console.log(this.nome + " Está Voando nos Arredores!!");
    }

    infoDono() {
        console.log("===============================");
        console.log("Dados do Dono");
        console.log("===============================\n");
        console.log("Nome: " + this.dono.nomeH);
        console.log("Idade: " + this.dono.idadeH);
        console.log("Endereço: " + this.dono.enderecoH);
        console.log("Contato: " + this.dono.contatoH);
    }
}

class Peixes extends Animais {
    constructor(nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida, dono)
    {
        super(nome, raca, quantidadePatas, cor, peso, tamanho, dataChegada, previsaoSaida);
        this.dono = dono;
    }

    interacao()
    {
        console.log(this.nome + " Está Nadando no seu Aquário!!")
    }

    infoDono() {
        console.log("===============================");
        console.log("Dados do Dono");
        console.log("===============================\n");
        console.log("Nome: " + this.dono.nomeH);
        console.log("Idade: " + this.dono.idadeH);
        console.log("Endereço: " + this.dono.enderecoH);
        console.log("Contato: " + this.dono.contatoH);
    }   
}

class Produtos {
    constructor (nomeProduto, descricaoProduto, precoProduto, qtdProduto, qtdcomprada)
    {
        this.nomeProduto = nomeProduto;
        this.descricaoProduto = descricaoProduto;
        this.precoProduto = precoProduto;
        this.qtdProduto = qtdProduto;
    }

    vendido ()
    {
        console.log("===============================");
        console.log("Confirmando Dados Pessoais");
        console.log("===============================\n");
        console.log("Nome do Produto Comprado: " + this.nomeProduto);
        this.qtdcomprada =prompt("Insira a Quantidade Comprada: ");
        let valortotal = this.qtdcomprada * this.precoProduto;
        console.log("Valor total: R$" + valortotal)
        this.comprador =prompt("Insira o nome do Comprador: ");
        this.cpfComprador =prompt("Insira o CPF do Comprador: ");
        this.formaPag =prompt("Insira a forma de Pagamento: ");
        console.clear()
        console.log("===============================\n");
        console.log("Compra Confirmada!");
        this.qtdProduto = this.qtdProduto - this.qtdcomprada;
    }

    comprovante()
    {
        console.log("===============================");
        console.log("COMPROVANTE DE VENDA");
        console.log("===============================\n");
        console.log("05/06/2024 - 12:35")
        let valortotal = this.qtdcomprada * this.precoProduto;
        console.log("Valor total: R$" + valortotal)
        console.log("Item Comprado: " + this.nomeProduto)
        console.log("Comprador: " + this.comprador);
        console.log("ID TRANSAÇÃO: XYAUSY1S123");
    }

    apresentarProduct()
    {
        console.log("===============================");
        console.log("Informações do Produto");
        console.log("===============================\n");  
        console.log("Nome: " + this.nomeProduto)
        console.log("Descrição: " + this.descricaoProduto);
        console.log("Preço: R$" + this.precoProduto);
        console.log("Quantidade em Estoque: " + this.qtdProduto)
        console.log("===============================\n");  
    }

    editProduct()
    {
        let change = 0;
        while (change != 5)
            {
                console.log("[1] Mudar nome \n[2] Mudar Descrição \n[3] Mudar Preço \n[4] Mudar Estoque \n[5] Retornar");
                change =prompt("Insira o que Deseja Mudar por Numeração: ");

                if (change == 1)
                    {
                        this.nomeProduto =prompt("Insira o novo nome do Produto: ");
                        console.clear();
                        console.log("Mudança Registrada . . .")
                    }

                if (change == 2)
                    {
                        this.descricaoProduto =prompt("Insira a nova Descrição do Produto: ");
                        console.clear();
                        console.log("Mudança Registrada . . .")
                    }

                if (change == 3)
                    {
                        this.precoProduto =prompt("Insira o novo Preço do Produto: R$");
                        console.clear();
                        console.log("Mudança Registrada . . .")
                    }

                if (change == 4)
                    {
                        this.qtdProduto =prompt("Insira a nova quantidade Disponivel no Estoque: ")
                        console.clear();
                        console.log("Mudança Registrada . . .")
                    }
            }
            console.clear();
    }
}

class Vendas extends Produtos {
    constructor (nomeProduto, precoProduto, comprador, qtdcomprada, cpfComprador, formaPag)
    {
        super (nomeProduto, precoProduto)
        this.comprador = comprador;
        this.qtdcomprada = qtdcomprada
        this.cpfComprador = cpfComprador
        this.formaPag = formaPag;
    }
}

// Cadastrando Funcionários
let gerente1 =  new Funcionarios ("Rafaela Oliveira", "29", "Rua das Flores, 123", "(11) 98765-4321", "Feminino", "2020-05-15", "123.456.789-10", "9876543-2", 5000);
let listagemGerentes = [gerente1];

let veterinario1 =  new Veterinarios ("Fabio Santos", "35", "Avenida dos Sonhos, 456", "(11) 12345-6789", "Masculino", "2019-09-20", "234.567.890-21", "8765432-1");
let veterinario2 =  new Veterinarios ("Aline Costa", "42", "Travessa das Palmeiras, 789", "(11) 23456-7890", "Feminino", "2021-03-10", "345.678.901-32", "7654321-3");
let veterinario3 =  new Veterinarios ("Leonardo Pereira", "27", "Rua das Árvores, 321", "(11) 34567-8901", "Masculino", "2018-11-05", "456.789.012-43", "654321-4");
let veterinario4 =  new Veterinarios ("Juliana Lima", "50", "Rua dos Ventos, 987", "(11) 45678-9012", "Feminino", "2022-01-30", "567.890.123-54", "54321-5");
let listagemVeterinarios = [veterinario1, veterinario2, veterinario3, veterinario4]

let balconista1 = new Balconistas("Rodrigo Fernandes", "33", "Avenida das Ondas, 654", "(11) 56789-0123", "Masculino", "2017-07-25", "678.901.234-65", "4321-6");
let balconista2 = new Balconistas("Patricia Costa", "25", "Rua das Pedras, 101", "(11) 67890-1234", "Feminino", "2016-04-12", "789.012.345-76", "321-7")
let listagemBalconistas = [balconista1, balconista2]

let vendedor1 = new Vendedores("Gustavo Almeida", "38", "Travessa das Montanhas, 202", "(11) 78901-2345", "Masculino", "2023-08-18", "890.123.456-87", "21-8");
let vendedor2 = new Vendedores("Carolina Rodrigues", "45", "Avenida das Estrelas, 505", "(11) 89012-3456", "Feminino", "2015-02-09", "901.234.567-98", "1-9");
let vendedor3 = new Vendedores("Andre Silva", "30", "Rua dos Rios, 303", "(11) 90123-4567", "Masculino", "2014-10-03", "012.345.678-09", "9876543-2");
let vendedor4 = new Vendedores("Luiza Ferreira", "23", "Avenida das Luas, 707", "(11) 01234-5678", "Feminino", "2024-04-29", "123.456.789-10", "8765432-1");
let listagemVendedores = [vendedor1, vendedor2, vendedor3, vendedor4];

// Cadastrando Animais e Donos
let donoarabe = new Humanos("João da Silva", "35", "Rua das Flores, 123", "joao.silva@email.com", "Masculino")
let arabe = new Cavalo ("Shark", "Árabe", "4", "Preto", "450kg", "1.6 Metros", "01/03/2024", "30/06/2024" , donoarabe)
let donofrisio = new Humanos ("Maria Oliveira", "28", "Avenida dos Sonhos, 456", "maria.oliveira@email.com", "Feminino")
let frisio = new Cavalo ("Shelby", "Frísio", "4", "Marrom", "700kg", "1.55 Metros", "03/01/2024", "23/08/2024", donofrisio)
let donoshire = new Humanos ("Carlos Santos", "42", "Travessa das Palmeiras, 789", "carlos.santos@email.com", "Masculino")
let shire = new Cavalo ("Mask", "Shire", "4", "Cinza", "1000kg", "2 Metros", "29/08/2023", "31/08/2024", donoshire)
let donoappaloosa = new Humanos ("Ana Pereira", "19", "Rua das Árvores, 321", "ana.pereira@email.com", "Feminino")
let appaloosa = new Cavalo ("Dark", "Appaloosa", "4", "Branco", "600kg", "1.5 Metros", "31/05/20243", "02/10/2024", donoappaloosa)
let donogypsy = new Humanos ("José Lima", "50", "Rua dos Ventos, 987", "jose.lima@email.com", "Masculino")
let gypsy = new Cavalo ("Thuder", "Gypsy", "4", "Marrom", "570kg", "1.44 Metros", "04/07/2023", "05/06/2024", donogypsy)
let listagemCavalos = [arabe, frisio, shire, appaloosa, gypsy];

let donoalemao = new Humanos ("Mariana Costa", "33", "Avenida das Ondas, 654", "mariana.costa@email.com", "Feminino")
let pastorAlemao =  new Cachorro ("Max", "Pastor Alemão", "4", "Marrom", "30Kg", "62 Centimetros", "19/04/2024", "08/12/2024", donoalemao)
let donobuldogue = new Humanos ("Paulo Fernandes", "27", "Rua das Pedras, 101", "paulo.fernandes@email.com", "Masculino")
let buldogue =  new Cachorro("Charlie", "Buldogue", "4", "Branco", "19Kg", "40 Centimetros", "12/02/2024", "05/06/2024", donobuldogue)
let donopoodle = new Humanos("Carla Rodrigues", "38", "Travessa das Montanhas, 202", "carla.rodrigues@email.com", "Feminino")
let poodle = new Cachorro ("Rocky", "Beagle", "4", "Marrom", "9Kg", "36 Centimetros", "03/02/2024", "06/08/2024", donopoodle)
let donohusky = new Humanos ("Antônio Almeida", "45", "Avenida das Estrelas, 505", "antonio.almeida@email.com", "Masculino")
let husky = new Cachorro ("Luna", "Husky", "4", "Cinza", "27Kg", "51 Centimetros", "03/01/2024", "29/06/2024", donohusky);
let donochihuahua = new Humanos("Patrícia Souza", "30", "Rua dos Rios, 303", "patricia.souza@email.com", "Feminino")
let chihuahua = new Cachorro("Max", "Chihuahua", "4", "Marrom", "1.5Kg", "17 Centimetros", "06/12/2023", "20/08/2024", donochihuahua)
let listagemCachorro = [pastorAlemao, buldogue, poodle, husky, chihuahua];

let donosiames = new Humanos ("Fernando Castro", "23", "Avenida das Luas, 707", "fernando.castro@email.com", "Masculino")
let siames = new Gato ("Tigger", "Siamês", "4", "Branco", "6Kg", "30 Centimetros", "25/02/2024", "31/06;2024", donosiames)
let donopersa = new Humanos ("Camila Nunes", "29", "Travessa das Praias, 404", "camila.nunes@email.com", "Feminino")
let persa = new Gato ("Lucy","Persa", "4", "Marrom", "3Kg", "25 Centimetros", "01/05/2024", "12/09/2024", donopersa)
let donoragdoll = new Humanos ("Ricardo Gomes", "39", "Rua das Montanhas, 606", "ricardo.gomes@email.com", "Masculino")
let ragDoll = new Gato ("Oliver", "RagDoll", "4", "Preto", "9Kg", "45 Centimetros" , "15/02/2025", "30/07/2024", donoragdoll)
let donosphynx = new Humanos ("Aline Santos", "25", "Avenida dos Lagos, 808", "aline.santos@email.com", "Feminino") 
let sphynx = new Gato ("Garfield", "Sphynx", "4", "Sem Pelos", "7Kg", "20 Centimetros", "01/02/2024", "15/07/2024", donosphynx)
let donobirmanes = new Humanos ("Gustavo Lima", "31", "Rua das Estrelas, 909", "gustavo.lima@email.com", "Masculino")
let birmanes = new Gato ("Max", "Birmanês", "4", "Cinza", "6Kg", "32 Centimetros", "25/04/2024", "28/06/2024", donobirmanes)
let listagemGato = [siames, persa, ragDoll, sphynx, birmanes]

let donocanario =  new Humanos ("Juliana Ferreira", "36", "Travessa dos Bosques, 111", "juliana.ferreira@email.com", "Feminino")
let canario = new Passaros ("Tweety", "Canário", "2", "Amarelo", "30 Gramas", "10 Centímetros", "07/01/2024", "25/06/2024", donocanario)
let donopardal =  new Humanos ("Pedro Carvalho", "20", "Avenida das Pedras, 212", "pedro.carvalho@email.com", "Masculino")
let pardal = new Passaros ("Pedro", "Pardal", "2", "Marrom", "25 Gramas", "15 Centímetros", "12/11/2023", "15/08/2024", donopardal)
let donotucano = new Humanos ("Laura Costa", "34", "Rua das Ondas, 313", "laura.costa@email.com", "Feminino");
let tucano = new Passaros ("Penélope", "Tucano", "2", "Colorido", "300 Gramas", "40 Centímetros", "12/05/2024", "23/06/2024", donotucano)
let donopicapau =  new Humanos ("Marcos Oliveira", "47", "Travessa dos Rios, 414", "marcos.oliveira@email.com", "Masculino")
let picapau = new Passaros ("Paco", "Pica-pau", "2", "Preto e branco", "150 Gramas", "25 Centímetros", "14/03/2024", "01/07/2024", donopicapau)
let donocoruja = new Humanos ("Vanessa Pereira", "26", "Avenida das Montanhas, 515", "vanessa.pereira@email.com", "Feminino");
let coruja = new Passaros ("Polly", "Coruja", "2", "Cinza", "200 Gramas", "30 Centímetros", "12/04/2024", "15/08/2024", donocoruja)
let listagemPassaro = [canario, pardal, tucano, picapau, coruja]

let donopalhaco = new Humanos ("Lucas Silva", "32", "Rua das Flores, 616", "lucas.silva@email.com", "Masculino")
let peixepalhaco = new Peixes ("Nemo", "Peixe Beta", "2", "Azul", "25 Gramas", "6 Centímetros", donopalhaco)
let donodourado = new Humanos ("Claudio", "25", "Rua Ernesto Pereira 556", "claudio@gmail.com", "Masculino")
let peixedourado = new Peixes ("Hulk", "Peixe Espada", "0", "Laranja", "50 Gramas", "10 Centimetros", donodourado)
let donobeta = new Humanos ("Valdemir Souza", "55", "Rua das Árvores 555", "valdemirsouza@gmail.com", "Masculino")
let peixebeta = new Peixes ("Hover", "Peixe Beta", "0", "Dourado", "15 Gramas", "5 Centimetros", donobeta)
let donoespada =  new Humanos ("Amanda Castro", "40", "Rua das Luas, 919", "amanda.castro@email.com", "Feminino")
let peixeespada = new Peixes ("Spike", "Peixe Espada", "1", "Prateado", "30 Gramas", "10 Centímetros", donoespada)
let donobolha =  new Humanos ("Gabriel Ferreira", "24", "Travessa dos Lagos, 120", "gabriel.ferreira@email.com", "Masculino")
let peixebolha = new Peixes ("Bubbles", "Peixe Bolha", "0", "Transparente", "10 Gramas", "4 Centímetros", donobolha)
let listagemPeixes = [peixepalhaco, peixedourado, peixebeta, peixeespada, peixebolha]

// Cadastrando Produtos
let pawfresh = new Produtos ("PawFresh Shampoo", "Shampoo para pelagem brilhante", 45, 50)
let vetmax = new Produtos ("VetMax Multivitaminas", "Suplemento vitamínico para pets", 75, 100)
let canine = new Produtos ("CanineCare Ração", "Ração premium para cães adultos", 150, 200)
let feline = new Produtos ("FelineFit Ração", "Ração balanceada para gatos", 120, 150)
let pestiscos = new Produtos ("HealthyBites Petiscos", "Petiscos saudáveis para cães", 25, 300)
let hygiene = new Produtos ("Kit HygienePet", "Kit completo de higiene para pets", 80, 75)
let collar = new Produtos ("CollarSafe", "Coleira antipulgas para cães e gatos", 60, 400)
let petvax = new Produtos ("PetVax Vacina", "Vacina polivalente para cães", 100, 200)
let brinquedo = new Produtos ("SoftPaws Brinquedo", "Brinquedo de pelúcia para pets", 30, 250)
let bebedouro = new Produtos ("AquaFresh Bebedouro", "Bebedouro automático para pets", 200, 50)
let listagemProdutos = [pawfresh, vetmax, canine, feline, pestiscos, hygiene, collar, petvax, brinquedo, bebedouro]

let escolha = 0;
let escolha2 = 0;
let escolha3 = 0;
let escolha4 = 0;
let escolha5 = 0;
let escolha6 = 0;
let escolhaSair = 0;
let escolhaSair2 = 0;

while (escolha != 4)
    {
        console.log("===============================");
        console.log("Bem vindo a Veterinária");
        console.log("===============================\n");
        console.log("Opções Disponiveis: \n");
        console.log("[1] Animais Cadastrados \n[2] Funcionarios \n[3] Produtos em Estoque \n[4] Finalizar Sistema");
        escolha =prompt("insira sua escolha: ");
        console.clear();
        if (escolha == 1)
            {
                while (escolha2 != 6 )
                    {
                        console.log("===============================");
                        console.log("Animais Cadastrados");
                        console.log("===============================\n");
                        console.log("[1] Cavalo");
                        console.log("[2] Cachorro");
                        console.log("[3] Gato");
                        console.log("[4] Aves");
                        console.log("[5] Peixes");
                        console.log("[6] Sair");
                        escolha2 =prompt("insira sua escolha: ");
                        console.clear();

                        if (escolha2 ==  1)
                            {
                                console.log("===============================");
                                console.log("Cavalos Cadastrados")
                                console.log("===============================\n");
                                for (i = 0; i < listagemCavalos.length; i++)
                                    {
                                        console.log("[" + (i + 1) + "] " + listagemCavalos[i].nome);
                                    }
                                escolha3 =prompt("Digite o nome de quem você quer Pesquisar: ");
                                console.clear();
                                
                                let finder = listagemCavalos.indexOf(escolha3);
                                let nomesCavalos = listagemCavalos.map(cavalo => cavalo.nome);
                                let finderIndex = nomesCavalos.indexOf(escolha3);
 
                                if (finderIndex !== -1)
                                    {
                                        do {
                                            listagemCavalos[finderIndex].apresentacao();
                                            console.log("Opções Disponiveis: \n[1] Interação \n[2] Informações Dono \n[3] Retornar")
                                            escolhaSair =prompt("Insira sua escolha: ");
                                            console.clear();

                                            if (escolhaSair == 1)
                                                {
                                                    listagemCavalos[finderIndex].interacao();
                                                    escolhaSair =prompt("Insira [1] Para Retornar: ");
                                                    console.clear();
                                                }

                                            else if(escolhaSair == 2)
                                                {
                                                    listagemCavalos[finderIndex].infoDono();
                                                    console.log("===============================\n");
                                                    escolhaSair =prompt("Insira [1] Para Retornar: ")
                                                    console.clear();
                                                }

                                        } while (escolhaSair != 3);
                                    }
                            }
                        
                            if (escolha2 == 2)
                                {
                                    console.log("===============================");
                                    console.log("Cachorros Cadastrados")
                                    console.log("===============================\n");
                                    for (i = 0; i < listagemCachorro.length; i++)
                                        {
                                            console.log("[" + (i + 1) + "] " + listagemCachorro[i].nome);
                                        }
                                    escolha3 =prompt("Digite o nome de quem você quer Pesquisar: ");
                                    console.clear();

                                    let finder = listagemCachorro.indexOf(escolha3);
                                    let nomesCachorros = listagemCachorro.map(cachorro => cachorro.nome);
                                    let finderIndex = nomesCachorros.indexOf(escolha3);
     
                                    if (finderIndex !== -1)
                                        {
                                            do {
                                                listagemCachorro[finderIndex].apresentacao();
                                                console.log("Opções Disponiveis: \n[1] Interação \n[2] Informações Dono \n[3] Retornar")
                                                escolhaSair =prompt("Insira sua escolha: ");
                                                console.clear();
    
                                                if (escolhaSair == 1)
                                                    {
                                                        listagemCachorro[finderIndex].interacao();
                                                        escolhaSair =prompt("Insira [1] Para Retornar: ");
                                                        console.clear();
                                                    }

                                                else if(escolhaSair == 2)
                                                    {
                                                        listagemCachorro[finderIndex].infoDono();
                                                        console.log("===============================\n");
                                                        escolhaSair =prompt("Insira [1] Para Retornar: ")
                                                        console.clear();
                                                    }

                                            } while (escolhaSair != 3);
                                        }
                                    else {
                                        console.log("Cachorro Não Encontrado, Insira novamente");
                                        console.clear();
                                    }
                                }

                            if (escolha2 == 3)
                                {
                                    console.log("===============================");
                                    console.log("Gatos Cadastrados")
                                    console.log("===============================\n");      
                                    for (i = 0; i < listagemGato.length; i++)
                                        {
                                            console.log("[" + (i + 1) + "] " + listagemGato[i].nome);
                                        }
                                    escolha3 =prompt("Digite o nome de quem você quer Pesquisar: ");
                                    console.clear();

                                    let finder = listagemGato.indexOf(escolha3);
                                    let nomesGato = listagemGato.map(gato => gato.nome);
                                    let finderIndex = nomesGato.indexOf(escolha3);
     
                                    if (finderIndex !== -1)
                                        {
                                            do {
                                                listagemGato[finderIndex].apresentacao();
                                                console.log("Opções Disponiveis: \n[1] Interação \n[2] Informações Dono \n[3] Retornar")
                                                escolhaSair =prompt("Insira sua escolha: ");
                                                console.clear();
    
                                                if (escolhaSair == 1)
                                                    {
                                                        listagemGato[finderIndex].interacao();
                                                        escolhaSair =prompt("Insira [1] Para Retornar: ");
                                                        console.clear();
                                                    }
                                                
                                                    else if(escolhaSair == 2)
                                                        {
                                                            listagemGato[finderIndex].infoDono();
                                                            console.log("===============================\n");
                                                            escolhaSair =prompt("Insira [1] Para Retornar: ")
                                                            console.clear();
                                                        }
                                            } while (escolhaSair != 3);
                                        }
                                    else {
                                        console.log("Gato Não Encontrado, Insira novamente");
                                        console.clear();
                                    }
                                }

                            if (escolha2 == 4)
                                {
                                    console.log("===============================");
                                    console.log("Passaros Cadastrados")
                                    console.log("===============================\n");      
                                    for (i = 0; i < listagemPassaro.length; i++)
                                        {
                                            console.log("[" + (i + 1) + "] " + listagemPassaro[i].nome);
                                        }
                                    escolha3 =prompt("Digite o nome de quem você quer Pesquisar: ");
                                    console.clear();

                                    let finder = listagemPassaro.indexOf(escolha3);
                                    let nomesPassaro = listagemPassaro.map(passaro => passaro.nome);
                                    let finderIndex = nomesPassaro.indexOf(escolha3);
     
                                    if (finderIndex !== -1)
                                        {
                                            do {
                                                listagemPassaro[finderIndex].apresentacao();
                                                console.log("Opções Disponiveis: \n[1] Interação \n[2] Informações Dono \n[3] Retornar")
                                                escolhaSair =prompt("Insira sua escolha: ");
                                                console.clear();
    
                                                if (escolhaSair == 1)
                                                    {
                                                        listagemPassaro[finderIndex].interacao();
                                                        escolhaSair =prompt("Insira [1] Para Retornar: ");
                                                        console.clear();
                                                    }
                                                else if(escolhaSair == 2)
                                                    {
                                                        listagemPassaro[finderIndex].infoDono();
                                                        console.log("===============================\n");
                                                        escolhaSair =prompt("Insira [1] Para Retornar: ")
                                                        console.clear();
                                                    }
                                            } while (escolhaSair != 3);
                                        }
                                    else {
                                        console.log("Passaro Não Encontrado, Insira novamente");
                                        console.clear();
                                    }
                                }

                            if (escolha2 == 5)
                                {
                                    console.log("===============================");
                                    console.log("Peixes Cadastrados")
                                    console.log("===============================\n");      
                                    for (i = 0; i < listagemPeixes.length; i++)
                                        {
                                            console.log("[" + (i + 1) + "] " + listagemPeixes[i].nome);
                                        }
                                    escolha3 =prompt("Digite o nome de quem você quer Pesquisar: ");
                                    console.clear();

                                    let finder = listagemPeixes.indexOf(escolha3);
                                    let nomesPeixes = listagemPeixes.map(peixes => peixes.nome);
                                    let finderIndex = nomesPeixes.indexOf(escolha3);
     
                                    if (finderIndex !== -1)
                                        {
                                            do {
                                                listagemPeixes[finderIndex].apresentacao();
                                                console.log("Opções Disponiveis: \n[1] Interação \n[2] Informações Dono \n[3] Retornar")
                                                escolhaSair =prompt("Insira sua escolha: ");
                                                console.clear();
    
                                                if (escolhaSair == 1)
                                                    {
                                                        listagemPeixes[finderIndex].interacao();
                                                        escolhaSair =prompt("Insira [1] Para Retornar: ");
                                                        console.clear();
                                                    }
                                                else if(escolhaSair == 2)
                                                    {
                                                        listagemPassaro[finderIndex].infoDono();
                                                        console.log("===============================\n");
                                                        escolhaSair =prompt("Insira [1] Para Retornar: ")
                                                        console.clear();
                                                    }
                                            } while (escolhaSair != 3);
                                        }
                                    else {
                                        console.log("Passaro Não Encontrado, Insira novamente");
                                        console.clear();
                                    }
                                }
                    }
            }

        if (escolha == 2)
            {
                while (escolha4 != 5)
                    {
                        console.log("===============================");   
                        console.log("Funcionarios Cadastrados")
                        console.log("===============================\n");   
                        console.log("[1] Gerentes \n[2] Veterinários \n[3] Balconistas \n[4] Vendedores \n[5] Retornar");
                        escolha4 =prompt("Insira sua escolha: ");
                        console.clear();
        
                        if (escolha4 == 1)
                            {
                                console.log("===============================");   
                                console.log("Gerentes Cadastrados")
                                console.log("===============================\n"); 
                                for (i = 0; i < listagemGerentes.length; i++)
                                    {
                                        console.log("[" + (i + 1) + "] " + listagemGerentes[i].nomeH);
                                    }
                                escolha3 =prompt("Digite o nome de quem você quer Pesquisar: ");
                                console.clear();

                                let finder = listagemGerentes.indexOf(escolha3);
                                let nomesGerentes = listagemGerentes.map(gerentes => gerentes.nomeH);
                                let finderIndex = nomesGerentes.indexOf(escolha3);
                                
                                if (finderIndex !== -1)
                                    {
                                        do {
                                            listagemGerentes[finderIndex].infos();
                                            console.log("===============================\n"); 
                                            console.log("Opções Disponiveis: \n[1] Retornar")
                                            escolhaSair =prompt("Insira sua escolha: ");
                                            console.clear();

                                        } while (escolhaSair != 1);
                                    }
                            }

                        else if (escolha4 == 2)
                            {
                                console.log("===============================");   
                                console.log("Veterinários Cadastrados")
                                console.log("===============================\n"); 
                                for (i = 0; i < listagemVeterinarios.length; i++)
                                    {
                                        console.log("[" + (i + 1) + "] " + listagemVeterinarios[i].nomeH);
                                    }
                                escolha3 =prompt("Digite o nome de quem você quer Pesquisar: ");
                                console.clear();  

                                let finder = listagemVeterinarios.indexOf(escolha3);
                                let nomesVeterinarios = listagemVeterinarios.map(veterinarios => veterinarios.nomeH);
                                let finderIndex = nomesVeterinarios.indexOf(escolha3);   
                                if (finderIndex !== -1)
                                    {
                                        do {
                                            listagemVeterinarios[finderIndex].infos();
                                            console.log("===============================\n"); 
                                            console.log("Opções Disponiveis: \n[1] Retornar")
                                            escolhaSair =prompt("Insira sua escolha: ");
                                            console.clear();

                                        } while (escolhaSair != 1);      
                                    }
                            }

                        if (escolha4 == 3)
                            {
                                console.log("===============================");   
                                console.log("Balconistas Cadastrados")
                                console.log("===============================\n"); 
                                for (i = 0; i < listagemBalconistas.length; i++)
                                    {
                                        console.log("[" + (i + 1) + "] " + listagemBalconistas[i].nomeH);
                                    }
                                escolha3 =prompt("Digite o nome de quem você quer Pesquisar: ");
                                console.clear();

                                let finder = listagemBalconistas.indexOf(escolha3);
                                let nomesBalconistas = listagemBalconistas.map(balconistas => balconistas.nomeH);
                                let finderIndex = nomesBalconistas.indexOf(escolha3);   
                                if (finderIndex !== -1)
                                    {
                                        do {
                                            listagemBalconistas[finderIndex].infos();
                                            console.log("===============================\n"); 
                                            console.log("Opções Disponiveis: \n[1] Retornar")
                                            escolhaSair =prompt("Insira sua escolha: ");
                                            console.clear();

                                        } while (escolhaSair != 1);   
                                    }
                            }

                        if (escolha4 == 4)
                            {
                                console.log("===============================");   
                                console.log("Vendedores Cadastrados")
                                console.log("===============================\n"); 
                                for (i = 0; i < listagemVendedores.length; i++)
                                    {
                                        console.log("[" + (i + 1) + "] " + listagemVendedores[i].nomeH);
                                    }
                                escolha3 =prompt("Digite o nome de quem você quer Pesquisar: ");
                                console.clear();

                                let finder = listagemVendedores.indexOf(escolha3);
                                let nomesVendedores = listagemVendedores.map(vendedores => vendedores.nomeH);
                                let finderIndex = nomesVendedores.indexOf(escolha3);   
                                if (finderIndex !== -1)
                                    {
                                        do {
                                            listagemVendedores[finderIndex].infos();
                                            console.log("===============================\n"); 
                                            console.log("Opções Disponiveis: \n[1] Retornar")
                                            escolhaSair =prompt("Insira sua escolha: ");
                                            console.clear();

                                        } while (escolhaSair != 1);   
                                    }
                            }

                    }
            }

        if (escolha == 3)
            {
                while (escolha5 != 3)
                    {
                        console.log("===============================");   
                        console.log("Produtos")
                        console.log("===============================\n"); 
                        console.log("[1] Produtos Cadastrados");
                        console.log("[2] Realizar Venda");
                        console.log("[3] Retornar")
                        escolha5 =prompt("Insira sua escolha: ")
                        console.clear();

                        if (escolha5 == 1)
                            {
                                console.log("===============================");   
                                console.log("Produtos Disponiveis")
                                console.log("===============================\n");  
                                for (i = 0; i < listagemProdutos.length; i++)
                                    {
                                        console.log("[" + (i + 1) + "] " + listagemProdutos[i].nomeProduto)
                                    }   
                                    console.log("===============================\n"); 
                                    escolha6 = prompt("Digite o produto que Deseja Pesquisar: "); 
                                    console.clear();

                                    let finder = listagemProdutos.indexOf(escolha6);
                                    let nomesProdutos = listagemProdutos.map(produto => produto.nomeProduto);
                                    let finderIndex = nomesProdutos.indexOf(escolha6);

                                    if (finderIndex !== -1)
                                        {
                                            do {
                                                listagemProdutos[finderIndex].apresentarProduct();
                                                console.log("Opções Disponiveis: \n[1] Editar \n[2] Retornar")
                                                escolhaSair =prompt("Insira sua escolha: ");
                                                console.clear();

                                                if (escolhaSair == 1)
                                                    {
                                                        console.log("===============================");   
                                                        console.log("Editando " + listagemProdutos[finderIndex].nomeProduto)
                                                        console.log("===============================\n");     
                                                        listagemProdutos[finderIndex].editProduct();
                                                    }
                                            } while (escolhaSair != 2); 

                                        }
                                    
                            }
                        if (escolha5 == 2)
                            {
                                console.log("===============================");   
                                console.log("Produtos Disponiveis para Venda")
                                console.log("===============================\n");  
                                for (i = 0; i < listagemProdutos.length; i++)
                                    {
                                        console.log("[" + (i + 1) + "] " + listagemProdutos[i].nomeProduto)
                                    }   
                                    console.log("===============================\n"); 
                                    escolha6 = prompt("Digite o Produto que Você Realizou a Venda: "); 
                                    console.clear();

                                    let finder = listagemProdutos.indexOf(escolha6);
                                    let nomesProdutos = listagemProdutos.map(produto => produto.nomeProduto);
                                    let finderIndex = nomesProdutos.indexOf(escolha6);

                                    if (finderIndex !== -1)
                                        {
                                            do {
                                                listagemProdutos[finderIndex].vendido();
                                                console.log("Opções Disponiveis: \n[1] Comprovante \n[2] Retornar")
                                                escolhaSair =prompt("Insira sua escolha: ");
                                                console.clear();

                                                if (escolhaSair == 1)
                                                    {
                                                        listagemProdutos[finderIndex].comprovante()
                                                        console.log("===============================\n"); 
                                                        escolhaSair2 =prompt("Aperte Qualquer Tecla para Retornar . . .");
                                                        console.clear();
                                                        break;
                                                    }
                                            } while (escolhaSair != 2); 
                                        }
                            }
                    }
            }
    }
