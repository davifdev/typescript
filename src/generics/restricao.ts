type ObterChaveFn = <T, U extends keyof T>(obj: T, key: U) => T[U];

const obj1 = {
  chave1: "VALOR1",
  chave2: "VALOR2",
  chave3: "VALOR3",
  chave4: "VALOR4",
  chave5: "VALOR5",
}

const obterChave: ObterChaveFn = (obj, key) => {
  return obj[key];
}

const result = obterChave(obj1, "chave1");
console.log(result);

export default 1;