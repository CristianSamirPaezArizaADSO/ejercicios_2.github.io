// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function convertirNumeroATexto(numero) {
  switch (numero) {
    case 0:
      return "cero";
    case 1:
      return "uno";
    case 2:
      return "dos";
    case 3:
      return "tres";
    case 4:
      return "cuatro";
    case 5:
      return "cinco";
    default:
      return "Número fuera de rango";
  }
}

const numero = parseInt(prompt("Por favor, ingresa un número del 0 al 5:"));

if (numero >= 0 && numero <= 5) {
  const texto = convertirNumeroATexto(numero);
  alert(`El número ingresado es: ${texto}`);
} else {
  alert("Número fuera de rango");
}
