class Produtos {
    constructor(nomeProduto, precoProduto, quantidadeProduto)
    {
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
        this.quantidadeProduto = quantidadeProduto;
    }
}

class Pedidos extends Produtos 
{
    constructor(itemCompra, quantidade, formaPagamento)
    {
        super(Produtos.nomeProduto, Produtos.precoProduto, Produtos.quantidadeProduto);
        this.itemCompra = itemCompra;
        this.quantidade = quantidade;
        this.formaPagamento = formaPagamento;
    }

    comprovante ()
    {
        console.log("Cliente Compro " + this.itemCompra.nomeProduto + "! Dinheiro Recebido por " + this.formaPagamento + " R$" + this.quantidade * this.itemCompra.precoProduto);
    }
}

let pao = new Produtos("Pão", 6, 5);
let sonho = new Produtos("Sonho", 8, 5);
let bolo = new Produtos("Bolo", 15, 10);
let pastel = new Produtos("Pastel", 7, 5);
let coxinha = new Produtos("Coxinha", 5, 5);

const lista_product = [pao.nomeProduto, sonho.nomeProduto, bolo.nomeProduto, pastel.nomeProduto, coxinha.nomeProduto]
const preco_product = [pao.precoProduto, sonho.precoProduto, bolo.precoProduto, pastel.precoProduto, coxinha.precoProduto]

console.log("Itens Disponiveis");
for (i = 0; i < 5; i++)
    {
        console.log("[" + `${i + 1}` +  "] " + lista_product[i] + "    Preço: R$" + preco_product[i])
    }

let compra_paes = new Pedidos(pao, 5, "PIX");
compra_paes.comprovante();
let compra_coxinha = new Pedidos(coxinha, 2, "PIX");
compra_coxinha.comprovante();