"use strict";

let pantalla = document.getElementById("texto");

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

let operador = 0;

let actual = 0;

let numeroMemoria = "";

cero.onclick = function () {
  pantalla.value += "0";
};

uno.onclick = function () {
  pantalla.value += "1";
};

dos.onclick = function () {
  pantalla.value += "2";
};

tres.onclick = function () {
  pantalla.value += "3";
};

cuatro.onclick = function () {
  pantalla.value += "4";
};

cinco.onclick = function () {
  pantalla.value += "5";
};

seis.onclick = function () {
  pantalla.value += "6";
};

siete.onclick = function () {
  pantalla.value += "7";
};

ocho.onclick = function () {
  pantalla.value += "8";
};

nueve.onclick = function () {
  pantalla.value += "9";
};

suma.onclick = function () {
  anterior += parseFloat(pantalla.value);
  pantalla.value = "";
  operador = "+";
};

resta.onclick = function () {
  anterior += parseFloat(pantalla.value);
  pantalla.value = "";
  operador = "-";
};

decimal.onclick = function () {
  pantalla.value += ".";
};

volver.onclick = function(){

    pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1);
}

raizCuadrada.onclick = function(){

    pantalla.value = Math.sqrt(pantalla.value);
}

cambioSigno.onclick = function(){

    if(pantalla.value.charAt(0) == "-"){
        pantalla.value = pantalla.value.slice(1);

    } else {

        pantalla.value = "-" + pantalla.value;
    }
}

multiplicacion.onclick = function () {
  if (anterior == "0") {
    anterior++;
  }
  anterior *= parseFloat(pantalla.value);
  console.log(anterior);
  pantalla.value = "";
  operador = "*";
};

memoria.onclick = function () {
  numeroMemoria = parseFloat(pantalla.value);
  pantalla.value = "";
};

constantePI.onclick = function () {
    pantalla.value = Math.PI;
  };

coseno.onclick = function () {
    pantalla.value = Math.PI;
  };

limpiar.onclick = function () {
  pantalla.value = "";

  anterior = 0;

  operador = 0;

  actual = 0;

  numeroMemoria = "";
};

limpiaCompleto.onclick = function () {
  pantalla.value = "";

  anterior = 0;

  operador = 0;

  actual = 0;

  numeroMemoria = "";
};

igual.onclick = function () {
  switch (operador) {
    case "+":
      actual = pantalla.value;

      pantalla.value = parseFloat(anterior) + parseFloat(actual);
      break;
    case "-":
      actual = pantalla.value;

      pantalla.value = parseFloat(anterior) - parseFloat(actual);
      break;
    case "*":
      actual = pantalla.value;

      pantalla.value = parseFloat(anterior) * parseFloat(actual);
      console.log(anterior);

      break;

    default:
      pantalla.value = 0;
  }
};
