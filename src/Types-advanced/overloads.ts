type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  console.log(y);
  if (args.length > 0)
    return args.reduce((acc, value) => acc + value, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1, 1,2,3,4,5,6))