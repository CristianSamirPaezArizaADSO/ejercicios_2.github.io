// Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.

const palabra = prompt("Ingresa una palabra");

function sinvocal(palabra) {
  var regex = /[aeiouAEIOU]/g;
  var nuevaPalabra = palabra.replace(regex, '');
  return nuevaPalabra;
}

var palabraSinVocales = sinvocal(palabra);
console.log("Palabra sin vocales:", palabraSinVocales);
