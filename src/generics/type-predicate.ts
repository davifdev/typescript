function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function sum<T>(...args: T[]): number {
  const result = args.reduce((acc, value) => {
    if (isNumber(acc) && isNumber(value)) {
      return acc + value;
    }

    return acc;
  }, 0);

  return result;
}

console.log(sum(1, 2, 3));
