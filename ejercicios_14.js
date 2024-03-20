// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este numero es par o impar

function alea(min, max) {
  return num = Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrar(num) {
  if (num % 2 === 0) {
    alert(`Este número ${num} es par`);
  } else {
    alert(`Este número ${num} es impar`);
  }
}

let min = 1;
let max = 10;
let numalea = alea(min, max);

mostrar(numalea);
