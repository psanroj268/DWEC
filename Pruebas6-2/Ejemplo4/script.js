"use strict";


let trampa = document.getElementById("botont");

let comprueba = document.getElementById("boton1");
let comprueba2 = document.getElementById("boton2");
let comprueba3 = document.getElementById("boton3");

let juego = document.getElementById("boton4");

let frase1 = document.getElementById("frase1");
let frase2 = document.getElementById("frase2");

let resultado = "";

let resultado2 = aleatorioExclusivo(0, 3);

let tirada = "";

function aleatorioExclusivo(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

switch (resultado2){
  case 0:
    resultado = "Piedra";
    break;
  case 1:
    resultado = "Papel";
    break;
  case 2:
    resultado = "Tijera";
    break;
  
  default: resultado = "Fallido";
}

trampa.onclick = function () {
  frase1.innerHTML = "El programa ha sacado: " + resultado;

}

comprueba.onclick = function(){
  tirada = 1;
}

comprueba2.onclick = function(){
  tirada = 2;
}

comprueba3.onclick = function(){
  tirada = 3;
}

juego.onclick = function(){
  switch (tirada){
  
  case 1:
    if (resultado == "Piedra"){
      frase2.innerHTML = "El Juego Se Ha Empatado";
    } else if (resultado == "Papel"){
      frase2.innerHTML = "Has Perdido Contra La Máquina";
    } else {
      frase2.innerHTML = "Has Ganado";
    }
    break;
  case 2:
    if (resultado == "Papel"){
      frase2.innerHTML = "El Juego Se Ha Empatado";
    } else if (resultado == "Tijera"){
      frase2.innerHTML = "Has Perdido Contra La Máquina";
    } else {
      frase2.innerHTML = "Has Ganado";
    }
    break;
  case 3:
    if (resultado == "Tijera"){
      frase2.innerHTML = "El Juego Se Ha Empatado";
    } else if (resultado == "Piedra"){
      frase2.innerHTML = "Has Perdido Contra La Máquina";
    } else {
      frase2.innerHTML = "Has Ganado";
    }
    break;

  default: frase2.innerHTML = "No Se Ha Jugado Bien";
}
}

