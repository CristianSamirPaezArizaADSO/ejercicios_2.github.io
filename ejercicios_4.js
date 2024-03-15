// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.

const palabra = prompt("Ingresa una palabra")

function silaba(palabra) {
  const exp = /([aeiou])(?:[aeiouy]?)(?![aeiou])/g;
  const silabas = palabra.match(exp)
  const total = silabas ? silabas.length : 0

  return total
}

let total = silaba(palabra)
console.log(`La palabra ${palabra} tiene ${total} silabas`)