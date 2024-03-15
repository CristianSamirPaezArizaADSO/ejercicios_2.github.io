// • Crea una función que tome un número como argumento y devuelva la cadena si el
// numero es par o impar.

function parimpar(num) {
  if (num % 2 == 0) {
    alert(`El numero ${num} es par`)
  }
  else {
    alert(`El numero ${num} es impar`)
  }
}

let num = parseInt(prompt("Ingresa un numero"))
parimpar(num)