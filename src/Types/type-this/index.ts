export function exThis(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

exThis.call(new Date(), "Davi", 24);