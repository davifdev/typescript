type Idade = number;

type Person = {
  name: string;
  lastName: string;
  age: Idade;
  salario?: number;
  favoriteColor?: string;
};

type RGBColors = "Vermelho" | "Verde" | "Azul";
type CMYKColors = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type PreferColors = RGBColors | CMYKColors; 

const person: Person = {
  name: "Davi",
  lastName: "Fernandes",
  age: 24,
  salario: 3000,
}

function setPreferColor(person: Person, cor: PreferColors): Person {
  return { ...person, favoriteColor: cor };
}

const result = setPreferColor(person, "Vermelho");
console.log(result);

export { person };