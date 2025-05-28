interface PersonProtocol<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

type PersonProtocol2<T, U> = {
  name: T;
  lastName: T;
  age: U;
};

export const person: PersonProtocol2<string, number> = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
};

const person1: PersonProtocol<number, number> = {
  name: 1,
  lastName: 2,
  age: 24,
};

const person2: PersonProtocol = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
};

console.log(person);
console.log(person1);
console.log(person2);
