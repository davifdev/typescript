export class Carro {
  private readonly motor = new Motor();
  
  ligar(): void {
    this.motor.ligar();
  }
  parar(): void {
    this.motor.parar();
  }

  freiar(): void {
    this.motor.freiar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

class Motor {
  ligar(): void {
    console.log("Motor está ligando...");
  }
  parar(): void {
    console.log("Motor está parado...");
  }

  freiar(): void {
    console.log("Motor está freiando...");
  }

  desligar(): void {
    console.log("Motor está desligando...");
  }
}

const carro = new Carro();
carro.ligar();
carro.desligar();
carro.freiar();
carro.parar();
