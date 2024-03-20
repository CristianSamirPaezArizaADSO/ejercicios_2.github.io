// Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

let a = parseInt(prompt("Ingresa un numero"))
let b = parseInt(prompt("Ingresa otro numero"))

if (a > 0 && b > 0) {
  let suma = a + b;
  alert(`La suma da: ${suma}`)
} else {
  let mal = 0
  alert(`La suma da: ${mal}`)
}