type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: "RED",
  verde: "GREEN",
  azul: "BLUE",
  preto: "BLACK",
  roxo: "PURPLE",
  cinza: "GRAY",
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

const cor = traduzirCor("azul", coresObj);
console.log(cor);
