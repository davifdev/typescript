export class Animal {
  constructor(public cor: string) {}
}

function decorator(target: any): any {
  console.log("Hello I am decorator!");
  return target;
}

const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated("Marrom");
console.log(animal);
