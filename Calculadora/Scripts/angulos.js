"use strict";

coseno.onclick = function () {
  anterior = pantalla.value;
  pantalla.value = "";
  operador = "cos";
};

tangente.onclick = function () {
  pantalla.value = Math.tan((pantalla.value * Math.PI) / 180);
};

seno.onclick = function () {
  pantalla.value = Math.sin(pantalla.value);
};
