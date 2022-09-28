"use strict"

function inicio() {

let persona;


function guarda() {
    document.getElementById("salida").innerHTML = persona = prompt("Dime tu nombre: ", "Pablo")
}

function saluda() {
    salida.innerHTML = `¡Hola, ${persona}!`;
}

function despide() {
    salida.innerHTML += ` ¡Adios, ${persona}!`;
}

}
window.onload = inicio;