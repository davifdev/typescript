export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected ataque: number,
    protected vida: number
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.status(this.ataque);
  }

  status(ataque: number) {
    this.vida -= ataque;

    if (this.vida <= 0) {
      console.log(`${this.emoji} - ${this.name} morreu`);
      return;
    }

    console.log(
      `${this.emoji} - ${this.name} agora tem ${this.vida} de vida...`
    );
  }

  abstract bordao(): void;
}

class Guerreira extends Personagem {
  protected emoji = "\u{1F9DD}";

  bordao(): void {
    console.log(this.emoji + " Xennaaa Guerreiraaaaaaa !!");
  }
}

class Monstro extends Personagem {
  protected emoji = "\u{1F9DF}";
  bordao(): void {
    console.log(this.emoji + " ARGWWGWARGHWWWWARGHWEWEA");
  }
}

const guerreira = new Guerreira("Xena", 100, 800);
const monstro = new Monstro("Godzilla", 87, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
