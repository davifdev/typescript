type FilterCallback<T> = (value: T, index?: number, array?: T[]) => boolean;

export function meuFilter<T>(array: T[], callbackFn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    if (callbackFn(array[index])) {
      newArray.push(array[index]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltrado = array.filter((value) => value < 5);
console.log(arrayFiltrado);

const meuArrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(meuArrayFiltrado);
