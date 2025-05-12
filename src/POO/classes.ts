export class Enterprise {
  public readonly name: string;
  private readonly collaborators: Collaborators[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addNewCollaborator(collaborator: Collaborators) {
    this.collaborators.push(collaborator);
  }
}

class Collaborators {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const branch = new Enterprise("DFL Software", "44.567.459/0001-74");
const colaborator1 = new Collaborators("Davi", "Fernandes");
const colaborator2 = new Collaborators("Robson", "Lima");
const colaborator3 = new Collaborators("Arlindo", "Pereira");

branch.addNewCollaborator(colaborator1);
branch.addNewCollaborator(colaborator2);
branch.addNewCollaborator(colaborator3);
branch.addNewCollaborator({
  name: "Ana",
  lastName: "Lima",
});

console.log(branch);
