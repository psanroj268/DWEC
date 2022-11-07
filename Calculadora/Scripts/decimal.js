"use strict";

decimal.onclick = function () {
    contador = pantalla.value.includes(".");
    if (contador == true){
  
    } else {
      if (pantalla.value == ""){
        pantalla.value += "0.";
      } else {
        pantalla.value += ".";
      }
      
    }
}