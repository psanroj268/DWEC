"use strict";

numeroElevado.onclick = function () {
  anterior = pantalla.value;
  pantalla.value = "";
  operador = "numEle";
};

dosElevado.onclick = function () {
  let val = 1;

  for (let i = 0; i < pantalla.value; i++) {
    val *= 2;
  }

  pantalla.value = val;
};
