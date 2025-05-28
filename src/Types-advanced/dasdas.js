function ehPalindromo(numero) {

  if (numero < 0) return;

  let original = numero;
  let reverso = 0;

  while (numero > 0) {
    let digito = numero % 10;

    reverso = reverso * 10 + digito;

    numero = Math.floor(numero / 10);
  }

  return original === reverso;
}

const result = ehPalindromo(121);
console.log(result);