export function joinObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
// Index Signature
const obj1: { [key1: string]: string } = { key1: "value1" };
const obj2: { [key2: string]: string } = { key2: "value2" };

const result = joinObjects(obj1, obj2);
console.log(result);
