"use strict";

suma.onclick = function () {
  if (operador == "*" || operador == "/" || operador == "-") {
    teclaIgual();

    console.log(resultado8);

    anterior = parseFloat(resultado8);
    console.log(anterior);
    pantalla.value = "";
    operador = "+";
  } else {
    anterior += parseFloat(pantalla.value);
    pantalla.value = "";
    operador = "+";
  }
};

resta.onclick = function () {
  if (operador == "*" || operador == "/" || operador == "-") {
    teclaIgual();

    console.log(resultado8);

    anterior = parseFloat(resultado8);
    console.log(anterior);
    pantalla.value = "";
    operador = "-";
  } else {
    anterior += parseFloat(pantalla.value);
    console.log(anterior);
    pantalla.value = "";
    operador = "-";
  }
};

multiplicacion.onclick = function () {
  if (operador == "+" || operador == "-") {
    teclaIgual();

    anterior = parseFloat(resultado8);
    console.log(anterior);
    pantalla.value = "";
    operador = "*";
  } else {
    if (anterior == "0") {
      anterior++;
    }

    anterior *= parseFloat(pantalla.value);
    console.log(anterior);
    pantalla.value = "";
    operador = "*";
  }
};

division.onclick = function () {
  if (
    operador == "+" ||
    operador == "-" ||
    operador == "*" ||
    operador == "/"
  ) {
    teclaIgual();

    anterior = parseFloat(resultado8);
    console.log(anterior);
    pantalla.value = "";
    operador = "/";
  } else {
    anterior = pantalla.value;
    console.log(anterior);
    pantalla.value = "";
    operador = "/";
  }
};
