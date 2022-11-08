"use strict";

let select = document.getElementById("calculadoras");

select.addEventListener('change',
  function(){
    let selectedOption = this.options[select.selectedIndex];

    if (selectedOption.value == "numerica"){
      document.getElementById("estilos").href = "./style.css"
    } else if (selectedOption.value == "científica"){
      document.getElementById("estilos").href = "./style2.css"
    }
  });

let pantalla = document.getElementById("answer");
let pantalla2 = document.getElementById("answer2");

let memoria = document.getElementById("boton1");
let volver = document.getElementById("boton2");
let limpiar = document.getElementById("boton3");
let limpiaCompleto = document.getElementById("boton4");

let siete = document.getElementById("boton5");
let ocho = document.getElementById("boton6");
let nueve = document.getElementById("boton7");
let division = document.getElementById("boton8");

let cuatro = document.getElementById("boton9");
let cinco = document.getElementById("boton10");
let seis = document.getElementById("boton11");
let multiplicacion = document.getElementById("boton12");

let uno = document.getElementById("boton13");
let dos = document.getElementById("boton14");
let tres = document.getElementById("boton15");
let resta = document.getElementById("boton16");

let cambioSigno = document.getElementById("boton17");
let cero = document.getElementById("boton18");
let decimal = document.getElementById("boton19");
let suma = document.getElementById("boton20");

let inversa = document.getElementById("boton32");
let raizCuadrada = document.getElementById("boton33");
let porcentaje = document.getElementById("boton34");
let igual = document.getElementById("boton35");

let logaritmo = document.getElementById("boton21");
let random = document.getElementById("boton22");
let logaritmoNeperiano = document.getElementById("boton23");
let dosElevado = document.getElementById("boton24");
let constanteE = document.getElementById("boton25");
let numeroElevado = document.getElementById("boton26");
let constantePI = document.getElementById("boton27");
let coseno = document.getElementById("boton28");
let factorial = document.getElementById("boton29");
let seno = document.getElementById("boton30");
let modulo = document.getElementById("boton31");
let tangente = document.getElementById("boton36");

let anterior = 0;

let operador = "";

let actual = 0;

let numeroMemoria = "";

let contador = 0;

let resultado8 = 0;
