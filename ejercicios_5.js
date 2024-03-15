// Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
//   * 5, nos debe mostrar el resultado para las demás multiplicaciones.

function tabla(num) {
  for (let i = 1; i <= 10; i++) {
    if (i === num) {
      console.log("No se deve mostrar")
    }
    else {
      console.log(`${i} X ${num} = ${i * num}`)
    }
  }
}

let num = parseInt(prompt("Ingresa un numero"))
tabla(num)