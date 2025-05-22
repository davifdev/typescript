type TipoPessoa = {
  nome: string;
  sobrenome: string;
  idade: number;
  nomeCompleto(): string;
  cpf?: string;
};

class Pessoa implements TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa1 = new Pessoa("Davi", "Fernandes", 24, "000.000.000-00");
console.log(pessoa1);
console.log(pessoa1.nomeCompleto());
