const arrNums: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrNums);

async function promisseAsync() {
  return 1;
}

promisseAsync().then(response => console.log(response));

function newPromise(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

newPromise().then(response => console.log(response));