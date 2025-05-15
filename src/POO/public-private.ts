export class Enterprise {
  public readonly name: string;
  private readonly collaborators: Collaborators[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addNewCollaborators(collaborator: Collaborators) {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Collaborators {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const DFLSoftware = new Enterprise("DFLSoftware", "00.00.00/0001-00");
const collaborator1 = new Collaborators("Davi", "Fernandes");

DFLSoftware.addNewCollaborators(collaborator1);
DFLSoftware.showCollaborators();
