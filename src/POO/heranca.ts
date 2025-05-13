export class Pessoa {
  constructor(
    public name: string,
    public lastName: string,
    private idade: number,
    protected cpf: string
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNameComplete(): string {
    return this.name + " " + this.lastName;
  }
}

export class Student extends Pessoa {
  constructor(name: string, lastName: string, idade: number, cpf: string) {
    super(name, lastName, idade, cpf);
  }

  public getNameComplete(): string {
    console.log("Executando antes");
    return super.getNameComplete();
  }
}

export class Client extends Pessoa {
  public getNameComplete(): string {
    return "Cliente: " + this.name + " " + this.lastName;
  }
}

const student = new Student("Davi", "Fernandes", 24, "000.000.000-00");
const client = new Client("Robson", "Pinto", 29, "000.000.000-00");

console.log(student.getNameComplete());
console.log(client.getNameComplete());
