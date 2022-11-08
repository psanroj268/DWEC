"use strict";

modulo.onclick = function () {
  anterior = pantalla.value;
  pantalla.value = "";
  operador = "modu";
};

random.onclick = function () {
  let num = Math.floor(Math.random() * 10);

  pantalla.value += num;
};

factorial.onclick = function () {
  let resul = 1;

  for (let i = 1; i <= pantalla.value; i++) {
    resul *= i;
  }

  pantalla.value = resul;
};
