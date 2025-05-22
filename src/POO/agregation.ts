export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  adicionarProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
   return this.produtos.reduce((acc, value) => acc + value.preco, 0);
  }

  mostrarProdutos(): void {
    for (const produto of this.produtos) {
      console.log(produto);
    }
  }
}

class Produto {
  constructor(public nome: string, public preco: number) {}
}

const carrinhoDeCompras = new CarrinhoDeCompras();
const produto1 = new Produto("Camisa", 58.9);
const produto2 = new Produto("Caneca", 25.7);
const produto3 = new Produto("Carregador", 99.9);

carrinhoDeCompras.adicionarProduto(produto1, produto2, produto3);

console.log(carrinhoDeCompras.valorTotal());
carrinhoDeCompras.mostrarProdutos();