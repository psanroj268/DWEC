"use strict"

let persona;

function saluda() {
    persona = prompt("Dime tu nombre: ", "Pablo")
    document.getElementById("salida").innerHTML = "Hola! " + persona;
}