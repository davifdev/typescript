interface Pessoa {
  nome: string;
}

interface Pessoa {
  sobrenome: string
}

interface Pessoa {
  age?: number
}

export const pessoa: Pessoa =  {
  nome: "Davi",
  sobrenome: "Fernandes",
  age: 24,
}

console.log(pessoa);