"use strict";

memoria.onclick = function () {
  if (numeroMemoria != "") {
    pantalla.value = numeroMemoria;
    pantalla2.value = "";
  } else {
    numeroMemoria = parseFloat(pantalla.value);
    pantalla.value = "";
    pantalla2.value = "M";
  }
};

volver.onclick = function () {
  pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);
};
