type FnCallback = (item: string) => string;

const mapString = (arr: string[], callbackFn: FnCallback) => {
  const newArr: string[] = [];

  for (let index = 0; index < arr.length; index++) {
    newArr.push(callbackFn(arr[index]));
  }

  return newArr;
};

const fruits = ["Laranja", "Pêra", "Uva"];
const arrMaped = mapString(fruits, (item: string) => {
  return item.toUpperCase();
});

console.log(arrMaped);
