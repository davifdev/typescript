const name: string = "Davi"; // string
const age: number = 24; // number
const adult: boolean = true; // true or false
const symbolType: symbol = Symbol("QualquerSymbol"); // symbol

console.log(name, age, adult, symbolType);

// Arrays
const arrayOfNumbers: Array<number> = [1, 2, 3, 4];
const arrayOfNumbers2: number[] = [1, 2, 3, 4];
const arrayOfStrings: Array<string> = ["a", "b", "c", "d"];
const arrayOfStrings2: string[] = ["a", "b", "c", "d"];

console.log(arrayOfNumbers, arrayOfNumbers2, arrayOfStrings, arrayOfStrings2)
// Object
const person: { name: string; age: number; adult?: boolean } = {
  name: "Davi",
  age: 24,
  adult: true,
};

console.log(person);

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

sum(5, 6);

const sum2: (x: number, y: number) => number = (x, y) => x + y;

const result = sum2(5, 4);

export { result };