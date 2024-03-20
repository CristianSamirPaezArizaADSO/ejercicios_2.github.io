// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada

const num = parseInt(prompt("Ingresa un grupo de numeros"))

function aditivo(num) {
  let alrevez

  if (num > 0) {
    alrevez = (num * (-1))
    alert(`Su aditivo es ${alrevez}`)
  }
  else if (num < 0) {
    alrevez = num * (-1)
    alert(`Su aditivo es ${alrevez}`)
  }
  else {
    alert("Ingresa un numero valido")
  }
}

aditivo(num)