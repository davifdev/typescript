const dataClient1: readonly [string, number] = ["Davi", 24];
const dataClient2: readonly [string, string, number] = [
  "Davi",
  "Fernandes",
  24,
];
const dataClient3: readonly [string, string, number?] = ["Davi", "Fernandes"];
const dataClient4: readonly [string, number, ...string[]] = ["Davi", 24];

console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);
console.log(dataClient4);
