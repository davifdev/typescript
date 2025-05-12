function error(): never {
  throw new Error("Deu erro");
}

console.log(error());