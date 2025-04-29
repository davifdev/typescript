type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Person = TemNome & TemSobrenome & TemIdade;

type AB = "A" | "B";
type AC = "A" | "C";
type AD = "D" | "A";

type Intersection =  AB & AC & AD;

const person: Person = {
  nome: "Davi",
  sobrenome: "Fernandes",
  idade: 24,
}

console.log(person);

export { person };
