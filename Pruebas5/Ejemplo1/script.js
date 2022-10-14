"use strict"

let frase1 = document.getElementById("frase");

let mayusculas = document.getElementById("boton1");
let minusculas = document.getElementById("boton2");
let priMayus = document.getElementById("boton3");
let ultMayus = document.getElementById("boton4");
let priMinus = document.getElementById("boton5");
let ultMinus = document.getElementById("boton6");
let vocMayus = document.getElementById("boton7");
let vocMinus = document.getElementById("boton8");
let conMayus = document.getElementById("boton9");
let conMinus = document.getElementById("boton10");

let aleatorio = document.getElementById("boton11");
let parar = document.getElementById("boton12");
let rapido = document.getElementById("boton13");
let lento = document.getElementById("boton14");

mayusculas.onclick = function(){
    frase1.value = frase1.toUpperCase();
}