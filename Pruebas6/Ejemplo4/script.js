"use strict";

let frase1 = document.getElementById("frase");

let cambio = document.getElementById("botont");

let comprueba = document.getElementById("boton1");

let frase2 = document.getElementById("frase2");

let i = false;

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

    frase2.innerHTML = "";
    i = false;
};

function comprobar () {

  let frasex = frase1.value.toLowerCase();

  frasex = frase1.value.replace(/\s+/g, "");

  frasex = frasex.toLowerCase();

  console.log(frasex);

  const palabras = frasex.split("");

  let invierte = palabras.reverse();

  let unir = invierte.join("");

  console.log(unir);

  if (frasex == unir) {
    i = true;
  }
}

comprueba.onclick = function () {

    comprobar();

    if (i == true ){
      frase2.innerHTML = "La frase es palíndroma";
    } else {
      frase2.innerHTML = "La frase no es palíndroma";
    }

}
