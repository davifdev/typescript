export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(public _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get ferramenta(): void {
    if (!this._ferramenta) {
      console.log("Você não possui uma ferramenta!");
      return;
    }

    console.log(`A sua ferramenta é ${this._ferramenta.nome}`);
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  escrever() {
    if (!this._ferramenta) {
      console.log("Não é possível escrever sem uma ferramenta");
      return;
    }

    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
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

const escritor = new Escritor("Chico Buarque");
const caneta = new Caneta("BIC");
const maquinaEscrever = new MaquinaEscrever("Mondial");
escritor.ferramenta = caneta;
escritor.escrever();
maquinaEscrever.escrever();

