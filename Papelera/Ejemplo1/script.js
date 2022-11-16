"use strict"

document.addEventListener("dragstart", function () {
  
});

document.addEventListener("dragover", function (evento) {
  evento.preventDefault();
});

document.addEventListener("drop", function (evento) {
  const papel = document.getElementById("papel");
  const papelera = document.getElementById("papelera");

  evento.preventDefault(); // Prevenimos su comportamiento por defecto
  if (evento.target.id === "papelera") { // Si el elemento que hemos soltado era la bola
    papelera.src = "../Images/papeleraLlena.jpg";    
    papel.style.visibility="hidden"
  } else {
    papelera.src = "../Images/papeleraVacia.jpg";
    papel.style.visibility="visible"
  }
});