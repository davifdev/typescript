export class Stack<T> {
  public count = 0;
  private _elements: { [key: number]: T } = {};

  push(element: T): void {
    this._elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return;

    this.count--;

    const element = this._elements[this.count];
    delete this._elements[this.count];
    return element;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  showStack(): void {
    for (const key in this._elements) {
      console.log(this._elements[key]);
    }
  }
}

const stack = new Stack<string>();
stack.push("Elemento1");
stack.push("Elemento2");
stack.push("Elemento3");
stack.push("Elemento4");
stack.showStack();

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
