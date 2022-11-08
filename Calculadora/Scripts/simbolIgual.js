"use strict";

igual.onclick = function () {
  teclaIgual();
  
};

function teclaIgual() {
  switch (operador) {
    case "+":
      actual = pantalla.value;

      pantalla.value = parseFloat(anterior) + parseFloat(actual);
      resultado8 = pantalla.value;
      break;
    case "-":
      actual = pantalla.value;

      pantalla.value = parseFloat(anterior) - parseFloat(actual);
      resultado8 = pantalla.value;
      break;
    case "*":
      actual = pantalla.value;

      pantalla.value = parseFloat(anterior) * parseFloat(actual);
      resultado8 = pantalla.value;
      console.log(anterior);

      break;
    case "/":
      actual = pantalla.value;

      pantalla.value = parseFloat(anterior) / parseFloat(actual);
      resultado8 = pantalla.value;
      console.log(anterior);

      break;
    case "cos":
      actual = pantalla.value;

      pantalla.value = Math.cos(anterior) * actual;

      break;
    case "numEle":
      actual = pantalla.value;

      let resultado = 1;

      for (let i = 0; i < actual; i++) {
        resultado *= anterior;
      }

      pantalla.value = resultado;

      break;
    case "modu":
      actual = pantalla.value;

      pantalla.value = anterior % actual;

      break;
    case "logaN":
      actual = pantalla.value;

      pantalla.value = Math.log(actual) / Math.log(anterior);

      break;
    case "porcen":
      actual = pantalla.value;

      pantalla.value = anterior * actual;

      anterior = pantalla.value;

      break;
    default:
      pantalla.value = 0;
  }
}
