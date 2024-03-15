// • Crea una función de nos devuelva el elemento mayor de un arreglo de números.

function mayor(numeros) {
  if (toString.call(numeros) !== `[object Array]`) {
    return null
  }
  if (!numeros.every(e => typeof e == `number`)) {
    return null
  }

  return Math.max.apply(null, numeros)
}

console.log(mayor([7, 3, 11, 59, 5, 4]))