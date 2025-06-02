interface Constructor {
  new (...args: any[]): any;
}

@outroDecorador("Parâmetro do segundo decorador")
@InverteNomeECor("valor1", "valor2")
export class Animal {
  constructor(public name: string, public color: string) {
    console.log("Sou a classe!");
  }
}

function InverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor): Constructor {
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
        return value.split("").reverse().join("") + " " + param1 + " " + param2;
      }
    };
  };
}

function outroDecorador(param: string) {
  return function (target: Constructor) {
    console.log("Outro Decorador", param);
    return target;
  };
}

const animal = new Animal("Gato", "Marrom");
console.log(animal);
