function concatOrSum(
  param1: string | number,
  param2: string | number
): string | number {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }

  return `${param1}${param2}`;
}

const sum = concatOrSum(5, 4);
console.log(sum);

const concat = concatOrSum("5", "4");
console.log(concat);


export { sum };