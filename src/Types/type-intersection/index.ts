type isName = { name: string };
type isLastName = { lastName: string };
type isAge = { age: number };
type Person = isName & isLastName & isAge;

const person: Person = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
};

type AB = "A" | "B";
type AC = "A" | "C";
type AD = "A" | "D";

type intersection = AB & AC & AD;

console.log(person);

export { person };
