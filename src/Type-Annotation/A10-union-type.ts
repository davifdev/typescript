function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 5));
console.log(addOrConcat("10", "5"));

function selectColor(cor: "Amarelo" | "Vermelho" | "Azul" | "Verde") {
  return cor;
}

const color = selectColor("Vermelho");
console.log(color);