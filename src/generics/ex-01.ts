class SystemVotation {
  public option1: number = 0;
  public option2: number = 0;
  public option3: number = 0;

  constructor(
    public option1Name: string,
    public option2Name: string,
    public option3Name: string,
    public msg: string
  ) {}

  voteInOption1(): void {
    this.option1++;
  }

  voteInOption2(): void {
    this.option2++;
  }

  voteInOpiton3(): void {
    this.option3++;
  }

  showResult(): void {
    console.log(this.msg);
    console.log(`${this.option1Name}: ${this.option1}`);
    console.log(`${this.option2Name}: ${this.option2}`);
    console.log(`${this.option3Name}: ${this.option3}`);
    console.log("######");
  }
}

class Language extends SystemVotation {}
class Colors extends SystemVotation {}

const languageFavorite = new Language(
  "Javascript",
  "TypeScript",
  "Phyton",
  "Qual sua linguagem de progamação favorita?"
);

languageFavorite.voteInOption1();
languageFavorite.voteInOption1();
languageFavorite.voteInOption1();
languageFavorite.showResult();

const colorFavorite = new Colors(
  "Vermelho",
  "Verde",
  "Azul",
  "Qual sua cor preferida?"
);

colorFavorite.voteInOption1();
colorFavorite.voteInOption1();
colorFavorite.voteInOption1();
colorFavorite.showResult();
