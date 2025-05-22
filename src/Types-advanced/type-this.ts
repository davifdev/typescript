export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }
}

class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);
calculadora.add(5).mul(2).pow(2);
console.log(calculadora);

// Builder - GoF
export class RequestBuilder {
  private method: "get" | "post" | null = null;
  private url: string | null = null;

  setMethod(method: "get" | "post"): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Utilizando o método ${this.method} em ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setMethod("get").setUrl("https://www.google.com").send();
