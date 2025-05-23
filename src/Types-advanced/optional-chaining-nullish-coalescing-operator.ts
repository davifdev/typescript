type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: "Carteira de Identidade",
  texto: "Essa é uma carteira de identidade",
  // data: new Date(),
};
const nullValue = null;
const undefinedValue = undefined;

console.log(documento.data?.getDay() ?? "1 - É um não valor");
console.log(nullValue ?? "2 - É um não valor");
console.log(undefinedValue ?? "3 - É um não valor");
console.log(undefinedValue ?? "3 - É um não valor");
