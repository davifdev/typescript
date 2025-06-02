function decorador(classPrototype: any, nomeMetodo: string): any {
  let valorPropiedade: any;

  return {
    get: () => valorPropiedade,
    set: (value: any) => {
      if (typeof value === "string") {
        valorPropiedade = value.split("").reverse().join("");
        return;
      }

      return value;
    },
  };
}

export class UmaPessoa {
  @decorador nome: string;
  @decorador sobrenome: string;
  @decorador idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(" ");
  }
}

const pessoa = new UmaPessoa("Davi", "Fernandes", 24);
console.log(pessoa.metodo("Hello World"));
