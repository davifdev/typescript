@InverteNomeECor
export class Animal {
  constructor(public name: string, public color: string) {
    console.log("Sou a classe!");
  }
}

function InverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log("Sou o decorador e recebi", target);
  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverse(args[0]);
      this.color = this.reverse(args[1]);
    }

    reverse(value: string): string {
      return value.split("").reverse().join("");
    }
  };
}

// const animal = new Animal("Gato", "Marrom");
// console.log(animal);
