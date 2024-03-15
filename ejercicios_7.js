// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’

function invertir(palabra) {
  let palabra_invertida = ""
  for (let i = palabra.length - 1; i >= 0; i--) {
    palabra_invertida += palabra[i]
  }
   alert(palabra_invertida)
}

let palabra = prompt("Ingresa una palabra")
let palabra_invertida = invertir(palabra)
console.log(palabra_invertida)
