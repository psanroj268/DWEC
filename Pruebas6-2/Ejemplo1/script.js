"use strict";

let palabra1 = document.getElementById("palabra")

let frase1 = document.getElementById("frase");

let cambio = document.getElementById("botont");

let contadora = 0;

function aleatorioExclusivo(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

palabra1.onclick = function () {
    frase1.value += String.fromCharCode(aleatorioExclusivo(65, 123)); 

}

cambio.onclick = function () {
    frase1.value = "";
}
