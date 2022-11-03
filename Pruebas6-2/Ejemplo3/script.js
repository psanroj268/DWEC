"use strict";

let frase1 = document.getElementById("frase");

let cambio = document.getElementById("botont");

let invertir = document.getElementById("boton1");

let frase2 = document.getElementById("frase2");

let cadena = "";

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

    frase2.value = "";
};

function inver () {
  const palabras = frase1.value.split(" ");

  for (let i = palabras.length - 1 ; i >= 0; i--) {
      for (let j = palabras[i].length - 1; j >= 0 ; j--) {
        
        frase2.value += palabras[i][j];
        
      }
    frase2.value += " ";
  }
}

invertir.onclick = function () {

  inver();

}
