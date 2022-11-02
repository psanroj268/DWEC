"use strict";

let palabra1 = document.getElementById("palabra")

let frase1 = document.getElementById("frase");

let cambio = document.getElementById("botont");

let contar = document.getElementById("boton1");

let frase2 = document.getElementById("frase2");

let contadora = 0;

function aleatorioExclusivo(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

cambio.onclick = function () {
  console.log("cambio clicked");

  let aleatoria = aleatorioExclusivo(0,100);

  document.getElementById("frase").innerHTML = "";


  fetch(`https://jsonplaceholder.typicode.com/posts/${aleatoria}`)
    .then((response) => response.json())
    .then((json) => frase1.value = json.body);
};

function cont () {
  const palabras = frase1.value.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] == palabra1.value){
      contadora++;
    }
  }
}

contar.onclick = function () {

    cont();

    frase2.innerHTML = "La palabra \"" + palabra1.value + "\" se repite " + contadora + " veces";
    contadora = 0;
}
