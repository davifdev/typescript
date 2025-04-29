enum Cores {
  VERMELHO,
  VERDE,
  AZUL,
}

enum Cores {
  LARANJA = 3,
  AMARELO = 4,
  CINZA = 5,
}

console.log(Cores);

function chosseTheColor(color: Cores): void {
  console.log(Cores[color]);
}

chosseTheColor(Cores.VERMELHO);