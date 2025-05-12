const car: { brand: string; model: string; year?: number } = {
  brand: "Fiat",
  model: "Uno",
  year: 1997,
};

console.log(car);

function sum(num1: any, num2: any) {

  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }

  return null;
}

const result = sum(99, 2); 

if (result) {
  console.log(result);
} else {
  console.log(result);
}


