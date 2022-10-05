"use strict"

let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

let decimal = document.getElementById("boton1");
let octal = document.getElementById("boton2");
let hexadecimal = document.getElementById("boton3");

let adecimal = document.getElementById("boton4");
let aoctal = document.getElementById("boton5");
let ahexadecimal = document.getElementById("boton6");

let copiar = document.getElementById("copia");

let resultado = document.getElementById("salida");
let resultado2 = document.getElementById("salida2");

decimal.onclick = function(){
    resultado.value = parseInt(valor1.value).toString(2);
}

octal.onclick = function(){
    resultado.value = parseInt(valor1.value).toString(8);
}

hexadecimal.onclick = function(){
    resultado.value = parseInt(valor1.value).toString(16);
}

copiar.onclick = function(){
    valor2.value = resultado.value;
}


adecimal.onclick = function(){
    resultado2.value = parseInt(valor2.value, 2);
}

aoctal.onclick = function(){
    resultado2.value = parseInt(valor2.value, 8);
}

ahexadecimal.onclick = function(){
    resultado2.value = parseInt(valor2.value, 16);
}