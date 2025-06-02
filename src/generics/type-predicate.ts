export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function sum<T>(...nums: T[]): number {
  const result = nums.reduce((acc, value) => {
    if (isNumber(value)) {
      return acc + value;
    }

    return acc;
  }, 0);

  return result;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);