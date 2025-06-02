interface Person<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

const person: Person<string, number> = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
};

console.log(person);

const person2: Person<string, string> = {
  name: "Robson",
  lastName: "Pereira",
  age: "28",
};

console.log(person2);

const person3: Person = {
  name: "Robson",
  lastName: "Pereira",
  age: 28,
};

console.log(person3);

type Car<T = string, U = number> = {
  brand: T,
  year: U,
  km: U,  
} 

const car1: Car = {
  brand: "Fiat",
  year: 1947,
  km: 500000
}

console.log(car1);

export default 1;
