export class Person {
  constructor(
    private readonly name: string,
    private readonly lastName: string,
    private readonly age: number,
    private _cpf: string
  ) {}

  get cpf(): string {
    return this._cpf.replace(/\D/g, "");
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const person1 = new Person("Davi", "Fernandes", 24, "000.000.000-00");
person1.cpf = "111.111.111-11";
console.log(person1.cpf);
