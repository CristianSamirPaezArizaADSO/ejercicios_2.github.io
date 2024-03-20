// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

let a = parseInt(prompt("Ingresa un numero"))
let b = parseInt(prompt("Ingresa otro numero"))

function binario(a, b) {
  suma = a + b;
  
  let resuido;
  let newNumber = [];

  while (suma > 0) {
    resuido = suma % 2;
    newNumber.push(resuido)
    suma = Math.floor(suma / 2);
  }

  console.log(newNumber.reverse().join(""))
}

binario(a, b)