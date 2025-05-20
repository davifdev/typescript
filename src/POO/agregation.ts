export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public name: string, public preco: number) {}
}

const produto1 = new Produto("Camiseta", 19.9);
const produto2 = new Produto("Camiseta", 19.9);
const produto3 = new Produto("Camiseta", 19.9);
const carrinhosDeCompras = new CarrinhoDeCompras();
carrinhosDeCompras.inserirProdutos(produto1, produto2, produto3);

const valorTotal = carrinhosDeCompras.valorTotal();
console.log(valorTotal);