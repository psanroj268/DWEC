"use strict"

let valor1 = document.getElementById("operador1");
let valor2 = document.getElementById("operador2");

let suma = document.getElementById("boton1");
let resta = document.getElementById("boton2");
let multiplica = document.getElementById("boton3");
let divide = document.getElementById("boton4");
let modulo = document.getElementById("boton5");

let resultado = document.getElementById("salida");

suma.onclick = function(){
    resultado.value = parseFloat(valor1.value) + parseFloat(valor2.value);
}

resta.onclick = function(){
    resultado.value = parseFloat(valor1.value) - parseFloat(valor2.value);
}

multiplica.onclick = function(){
    resultado.value = parseFloat(valor1.value) * parseFloat(valor2.value);
}

divide.onclick = function(){
    resultado.value = parseFloat(valor1.value) / parseFloat(valor2.value);
}

modulo.onclick = function(){
    resultado.value = parseFloat(valor1.value) % parseFloat(valor2.value);
}