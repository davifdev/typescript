interface VotationOption {
  option: string;
  numberOfVotes: number;
}

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addOptionsVotation(option: VotationOption): void {
    this._votationOptions.push(option);
  }

  addVote(valueIndex: number): void {
    if (!this._votationOptions[valueIndex - 1]) return;
    this._votationOptions[valueIndex - 1].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotations(votation: Votation): void {
    this.votations.push(votation);
  }

  showResult(): void {
    for (const option of this.votations) {
      console.log(option.details);
      for (const votateOptions of option.votationOptions) {
        console.log(votateOptions.option, votateOptions.numberOfVotes);
      }
      console.log("###--###--###");
      console.log("");
    }
  }
}

const votation1 = new Votation("Qual sua linguagem de progamção favorita? ");
votation1.addOptionsVotation({ option: "Javascript", numberOfVotes: 0 });
votation1.addOptionsVotation({ option: "Typescript", numberOfVotes: 0 });
votation1.addOptionsVotation({ option: "Phyton", numberOfVotes: 0 });
votation1.addOptionsVotation({ option: "Java", numberOfVotes: 0 });

const votationApp = new VotationApp();
votationApp.addVotations(votation1);
votation1.addVote(2);
votation1.addVote(2);
votation1.addVote(2);
votation1.addVote(1);
votation1.addVote(1);
votation1.addVote(1);
votationApp.showResult();
