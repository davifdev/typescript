export class Enterprise {
  public readonly name: string;
  public readonly cnpj: string;
  private readonly collaborators: Collaborators[] = [];

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addNewCollaborator(collaborator: Collaborators) {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

class Collaborators {
  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public role: string
  ) {}
}

const enterprise = new Enterprise("DFLSoftware", "00.00.00/000-00");
const collaborator1 = new Collaborators(
  "Davi",
  "Fernandes",
  24,
  "Frontend Developer"
);
const collaborator2 = new Collaborators("Robson", "Fernandes", 24, "DevOps");

enterprise.addNewCollaborator(collaborator1);
enterprise.addNewCollaborator(collaborator2);
enterprise.addNewCollaborator({
  name: "Rafael",
  lastName: "Silva",
  age: 29,
  role: "Backend Developer",
});

enterprise.showCollaborators();
