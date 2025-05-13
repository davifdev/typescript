export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private idade: number,
    private _cpf: string
  ) {}

  get cpf() {
    return this._cpf;
  }

  set cpf(valor: string) {
    this._cpf = valor;
  }
}

const person = new Person("Davi", "Fernandes", 24, "000.000.000-00");
person.cpf = "709.576.641-09"
console.log(person.cpf);
