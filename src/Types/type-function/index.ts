const arrString = ["a", "b", "c", "d", "e", "f"];

type FnCallbackType<T> = (value: T, index?: number, array?: T[]) => T;

const myMap = <T>(arr: T[], fnCallback: FnCallbackType<T>) => {
  const newArr: T[] = [];

  for (let index = 0; index < arr.length; index++) {
    newArr.push(fnCallback(arr[index]));
  }

  return newArr;
};

const result = myMap(arrString, (value) => value.toUpperCase());

console.log(result);

export default 1;
