"use strict";

raizCuadrada.onclick = function () {
  pantalla.value = Math.sqrt(pantalla.value);
};

cambioSigno.onclick = function () {
  if (pantalla.value.charAt(0) == "-") {
    pantalla.value = pantalla.value.slice(1);
  } else {
    pantalla.value = "-" + pantalla.value;
  }
};

porcentaje.onclick = function () {
  anterior = pantalla.value / 100;
  pantalla.value = "";
  operador = "porcen";
};

inversa.onclick = function () {
  pantalla.value = "1/" + pantalla.value;
};
