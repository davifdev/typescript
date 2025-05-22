export class Carro {
  private motor: Motor = new Motor();

  acelerar(): void {
    this.motor.acelerar();
  }

  freiar(): void {
    this.motor.freiar();
  }

  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

class Motor {
  acelerar(): void {
    console.log("Motor está acelerando");
  }

  freiar(): void {
    console.log("Motor está freiando");
  }

  ligar(): void {
    console.log("Motor está ligado");
  }

  desligar(): void {
    console.log("Motor está desligado");
  }
}

const carro = new Carro();

carro.acelerar();
carro.freiar();
carro.ligar();
carro.desligar();
