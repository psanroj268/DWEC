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
    frase1.value = frase1.value.toUpperCase();
}

minusculas.onclick = function(){
    frase1.value = frase1.value.toLowerCase();
}

priMayus.onclick = function(){
    const palabras = frase1.value.split(' ');

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
    }

    frase1.value = palabras.join(' ');
}

ultMayus.onclick = function (){
    frase1.value = frase1.value.split(" ").map(function (l){
        return l.slice(0, -1) + l.slice(-1).toUpperCase();
    }).join(" ");
}

priMinus.onclick = function(){
    const palabras = frase1.value.split(' ');

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toLowerCase() + palabras[i].substr(1);
    }

    frase1.value = palabras.join(' ');
}

ultMinus.onclick = function (){
    frase1.value = frase1.value.split(" ").map(function (l){
        return l.slice(0, -1) + l.slice(-1).toLowerCase();
    }).join(" ");
}

vocMayus.onclick = function (){
    frase1.value = frase1.value.replace(/[aeiou]/g, function (l){
        return l.toUpperCase();
    });
}

vocMinus.onclick = function (){
    frase1.value = frase1.value.replace(/[AEIOU]/g, function (l){
        return l.toLowerCase();
    });
}

conMayus.onclick = function (){
    frase1.value = frase1.value.replace(/[bcdfghjklmnñpqrstvwxyz]/g, function (l){
        return l.toUpperCase();
    });
}

conMinus.onclick = function (){
    frase1.value = frase1.value.replace(/[BCDFGHJKLMNÑPQRSTVWXYZ]/g, function (l){
        return l.toLowerCase();
    });
}