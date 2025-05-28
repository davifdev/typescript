export class Stack<T> {
  private count = 0;
  private elements: { [key: number]: T } = {};

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return;

    this.count--;
    const element = this.elements[this.count];
    delete this.elements[this.count];
    return element;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  length(): number {
    return this.count;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<string>();
stack.push("Elemento1");
stack.push("Elemento2");
stack.push("Elemento3");
stack.push("Elemento4");
const element = stack.pop();
stack.showStack();
console.log(stack.length());
console.log(element);

while (!stack.isEmpty()) {
  console.log(stack.pop());
}