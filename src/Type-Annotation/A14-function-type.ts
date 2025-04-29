type callbackString = (fruit: string) => string;

const mapString = (arr: string[], callbackFn: callbackString) => {
  const newArr: string[] = [];

  for (const item of arr) {
    newArr.push(callbackFn(item));
  }

  return newArr;
};

const fruits = ["Laranja", "Melancia", "Pêra", "Morango"];
const fruitsMaped = mapString(fruits, (fruit: string) => fruit.toUpperCase());

console.log(fruitsMaped);