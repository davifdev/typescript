interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoIdade {
  idade: number;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa
  extends TipoNome,
    TipoSobrenome,
    TipoIdade,
    TipoNomeCompleto {}

export class Pessoa implements TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number
  ) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa1 = new Pessoa("Davi", "Fernandes", 24);
console.log(pessoa1);
