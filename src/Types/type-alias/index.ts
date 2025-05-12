type isNumber = number;

type PersonTypes = {
  name: string;
  lastName: string;
  age: isNumber;
  role: string;
  stack: string[];
  sexo?: string;
};

const person: PersonTypes = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
  role: "Software Developer",
  stack: ["React", "React Native", "Typescript"],
  sexo: "masc"
};

console.log(person);

export { person };
