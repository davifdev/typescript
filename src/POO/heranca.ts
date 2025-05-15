export class Person {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    public readonly age: number,
    protected readonly cpf: string
  ) {}

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNameComplete(): string {
    return this.name + " " + this.lastName;
  }
}

class Client extends Person {
  getNameComplete(): string {
    console.log("Executar Antes");
    return super.getNameComplete();
  }
}

class Student extends Person {
  getNameComplete(): string {
    return "Client " + this.name + " " + this.lastName;
  }
}

const client = new Client("Davi", "Fernandes", 24, "000.000.000-00");
const student = new Student("Marta", "Silva", 33, "111.111.111-11");

console.log(client.getNameComplete());
console.log(student.getNameComplete());
