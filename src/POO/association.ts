export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome() {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (!this._ferramenta) {
      console.log("Não posso escrever sem uma ferramenta!");
      return;
    }

    this._ferramenta.escrever();
  }
}

abstract class Ferramenta {
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor("Leandro Damião");
const caneta = new Caneta("Caneta Bic");
const maquinaEscrever = new MaquinaEscrever("Máquina Mondial");

escritor.nome = "Roberval Perreira";
console.log(escritor.nome);
caneta.escrever();
maquinaEscrever.escrever();
escritor.ferramenta = caneta;

escritor.escrever();