export function sumOrConcat(x: unknown, y: unknown) {
  if (typeof x === "number" && typeof y === "number") return x + y;
  return `${x}${y}`;
}

const sum = sumOrConcat(10, 5);
const concat = sumOrConcat("Hello ", "World!");
console.log(sum);
console.log(concat);

type Pessoa = { tipo: "pessoa"; nome: string };
type Animal = { tipo: "animal"; cor: string };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: "pessoa" = "pessoa";
  constructor(public nome: string) {}
}

function mostrarNome(obj: PessoaOuAnimal) {
  // if ("nome" in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case "pessoa":
      console.log(obj.nome);
      return;
    case "animal":
      console.log("Isso é um animal", obj.cor);
      return;
  }
}

mostrarNome(new Aluno("Davi"));
mostrarNome({
  tipo: "animal",
  cor: "Marrom",
});
