const objA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

objA.chaveA = "Outro Valor";
objA.chaveC = "Nova Chave";
