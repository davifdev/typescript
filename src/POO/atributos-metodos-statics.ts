export class Person {
  static agePattern: number = 24;
  static cpfPattern: string = "000.000.000-00";

  constructor(
    public readonly name: string,
    public readonly lastName: string,
    public readonly age: number,
    public readonly cpf: string
  ) {}

  static greet(): void {
    console.log("Hello World");
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.agePattern, Person.cpfPattern);
  }
}

const person1 = Person.createPerson("Davi", "Fernandes");
console.log(person1);
