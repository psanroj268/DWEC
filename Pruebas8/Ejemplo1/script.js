"use strict";

let botones = document.getElementsByTagName("input");

for (let boton of botones){
  boton.addEventListener("click", cambioColor);
}

function cambioColor (){

  let Contenedor = document.getElementById("bloque");

  let color = this.value;

  let colorear = "";
  
    switch(color){
      case "Rojo":
        colorear = "#ff0000";
      break;
      case "Verde":
        colorear = "#00ff00";
      break;
      case "Azul":
        colorear = "#0000ff";
      break;
      default: colorear = "#ffffff";
    }

    Contenedor.style.backgroundColor = colorear;
    
}