// Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
// cortas menores de 5 caracteres)

const palabra = prompt("Ingresa una palabra")
var mmh = palabra.length

function longitud(palabra) {
  if (mmh > 5) {
    alert("La palabra es larga")
  } else {
    alert("La palabra es corta")
  }
}

longitud(palabra)