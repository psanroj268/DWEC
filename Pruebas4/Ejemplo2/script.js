"use strict"

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