const arrNums: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrNums);

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));
