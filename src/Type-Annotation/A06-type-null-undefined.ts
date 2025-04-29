let x;
if (typeof x === "undefined") x = 2;
console.log(x * 2);

function createPerson(
  firstName: string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwoNum = squareOf(2);

if (squareOfTwoNum === null) {
  console.log("Conta Inválida!");
} else {
  console.log(squareOfTwoNum);
}