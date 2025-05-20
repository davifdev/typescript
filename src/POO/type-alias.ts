type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};

class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa1 = new Pessoa("Davi", "Fernandes");
console.log(pessoa1.nomeCompleto());
