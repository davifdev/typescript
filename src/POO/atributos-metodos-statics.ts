export class Person {
  static agePattern = 0;
  static cpfPattern = "111.111.111-11";

  constructor(
    private readonly name: string,
    private readonly lastName: string,
    private readonly age: number,
    private cpf: string
  ) {}

  static greet(): void {
    console.log("Hello!");
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.agePattern, Person.cpfPattern);
  }

  normalMethod(): void {
    console.log(Person.agePattern, Person.cpfPattern);
  }
}

const person1 = new Person("Davi", "Fernandes", 24, "000.000.000-00");
const person2 = Person.createPerson("Davi", "Fernandes");
person1.normalMethod();
console.log(person2);
console.log(Person.agePattern);
console.log(Person.cpfPattern);