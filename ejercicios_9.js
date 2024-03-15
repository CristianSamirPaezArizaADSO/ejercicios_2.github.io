// Genera un patrón de asteriscos en forma de pirámide.

let numero = parseInt(prompt("Ingresa un numero"))

if (numero && numero > 0) {
  for (let i = 1; i <= numero; i++) {
    let linea = ""
    for (let j = 0; j < i; j++) {
      linea += "*"
    }
    console.log(linea)
  }
} else {
  alert("Ingresa un numero positivo entero")
}