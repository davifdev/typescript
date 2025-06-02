const arrNums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arrNums.filter((value) => value < 6));

type FnCallbackType<T> = (value: T, index?: number, array?: T[]) => boolean;

const myFilter = <T>(arr: T[], fnCallback: FnCallbackType<T>): T[] => {
  const newArr: T[] = [];

  for (let index = 0; index < arr.length; index++) {
    if (fnCallback(arr[index])) {
      newArr.push(arr[index]);
    }
  }

  return newArr;
};

const result = myFilter(arrNums, (value) => value < 6);

console.log(result);

export default 1;
