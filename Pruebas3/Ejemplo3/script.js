"use strict"

windows.addEventListener("load", function(){

let persona;


function guarda() {
    persona = prompt("Dime tu nombre: ", "Pablo")
}

function saluda() {
    alert("Hola! " + persona);
}

function despide() {
    alert("Adios! " + persona);
}
});