"use strict";

let frase1 = document.getElementById("frase");

let cambio = document.getElementById("botont");

let contar = document.getElementById("boton1");

let frase2 = document.getElementById("frase2");
let frase3 = document.getElementById("frase3");
let frase4 = document.getElementById("frase4");

let contadora = 0;
let contadora2 = 0;
let contadora3 = 0;

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
    frase3.innerHTML = "";
    frase4.innerHTML = "";
};

function cont () {
  const palabras = frase1.value.split(" ");

  for (let i = 0; i < palabras.length; i++) {
      contadora++;
    
  }
}
function cont2 () {
  const palabras = frase1.value.split(" ");

  for (let i = 0; i < palabras.length; i++) {
      for (let j = 0; j < palabras[i].length; j++) {
        if (palabras[i][j] == "a" || palabras[i][j] == "e" || palabras[i][j] == "i" || palabras[i][j] == "o" || palabras[i][j] == "u" ||
            palabras[i][j] == "A" || palabras[i][j] == "E" || palabras[i][j] == "I" || palabras[i][j] == "O" || palabras[i][j] == "U") {
          contadora2++;
        } else if (palabras[i][j] == "0" || palabras[i][j] == "1" || palabras[i][j] == "2" || palabras[i][j] == "3" || palabras[i][j] == "4" ||
                   palabras[i][j] == "5" || palabras[i][j] == "6" || palabras[i][j] == "7" || palabras[i][j] == "8" || palabras[i][j] == "9" || palabras[i][j] == "."){

        } else {
        
          contadora3++;
        }
        
      }
    
  }
}

contar.onclick = function () {

    cont();
    cont2();

    frase2.innerHTML = "Hay " + contadora + " palabras.";
    frase3.innerHTML = "Hay " + contadora2 + " vocales.";
    frase4.innerHTML = "Hay " + contadora3 + " consonantes.";
    contadora3 = 0;
    contadora2 = 0;
    contadora = 0;
}
