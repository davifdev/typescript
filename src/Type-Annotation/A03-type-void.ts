function noReturn(...args: string[]): void {
  console.log(args.join(" "));
}

noReturn("Davi", "Fernandes", "de", "Lima");

const person1: { name: string; lastName: string; showName(): void } = {
  name: "Davi",
  lastName: "Fernandes",

  showName(): void {
    console.log(this.name + " " + this.lastName);
  },
};

person1.showName();

export { noReturn };
