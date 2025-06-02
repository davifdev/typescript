function joinObjects<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign({}, obj1, obj2);
}

const obj1: { [key: string]: string } = { chave1: "valor1" };
const obj2: { [key: string]: string } = { chave2: "valor2" };

const result = joinObjects(obj1, obj2);
console.log(result);

export default 1;