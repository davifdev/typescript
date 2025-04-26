let x = 10;
x = 0b0101;
const y = 10;
let a = 100 as const;

console.log(x);
console.log(a);

const person = {
  name: "Davi" as const,
  age: 24,
};

console.log(person.name);

function selectColor(cor: "Amarelo" | "Vermelho" | "Azul" | "Verde") {
  return cor;
}

const color = selectColor("Vermelho");
console.log(color);
export { x };
