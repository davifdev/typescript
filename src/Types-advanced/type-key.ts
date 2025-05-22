type Veiculo = {
  marca: string;
  ano: number;
  cor: string;
};

type Car = {
  brand: Veiculo["marca"];
  year: Veiculo["ano"];
  color: Veiculo["cor"];
};

const carro: Car = {
  brand: "Fiat",
  year: 1947,
  color: "Amarelo",
};

console.log(carro);
