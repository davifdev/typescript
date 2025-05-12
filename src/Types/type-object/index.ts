const person: {
  name: string;
  lastName: string;
  age: number;
  sexo?: string;
  [key: string]: unknown; // Index Signature
} = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
};

person.sexo = "masc";
person.role = "Software Enginer";
person.stack = ["React", "React Native", "Typescript"];

console.log(person);

export { person };
