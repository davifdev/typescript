const name: string = "Davi"; // string
const age: number = 24; // number
const adult: boolean = true; // true or false
const symbolType: symbol = Symbol("QualquerSymbol"); // symbol

// Arrays
const arrayOfNumbers: Array<number> = [1, 2, 3, 4];
const arrayOfNumbers2: number[] = [1, 2, 3, 4];
const arrayOfStrings: Array<string> = ["a", "b", "c", "d"];
const arrayOfStrings2: string[] = ["a", "b", "c", "d"];

// Object
const person: { name: string; age: number; adult?: boolean } = {
  name: "Davi",
  age: 24,
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;