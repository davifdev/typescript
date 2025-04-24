// Array<T> T[]

const multiplyArgs = (...args: Array<number>): number => {
  return args.reduce((acc, val) => (acc *= val), 1);
};

const multiplyResult = multiplyArgs(1, 2, 3);
console.log(multiplyResult);

const concatArgs = (...args: string[]): string => {
  return args.reduce((acc, val) => acc + val);
};

const concatResult = concatArgs("a", "b", "c");
console.log(concatResult);

const toUpperCase = (...args: string[]): string[] => {
  return args.map((arg) => arg.toUpperCase());
};

const upperCaseResult = toUpperCase("a", "b", "c");
console.log(upperCaseResult);

// readonly
const arr: readonly string[] = ["Davi", "Fernandes"];
console.log(arr);

const arr2: ReadonlyArray<string> = ["Davi", "Fernandes"];
console.log(arr2);
