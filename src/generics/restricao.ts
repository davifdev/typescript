type ObterChaveFn = <T, U extends keyof T>(objeto: T, chave: U) => T[U];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: "Preto"
}

export const result = obterChave(animal, "cor");
console.log(result);