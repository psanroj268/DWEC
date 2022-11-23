"use strict";

let imagen1 = document.getElementById("img1");
let imagen2 = document.getElementById("img2");
let imagen3 = document.getElementById("img3");
let imagen4 = document.getElementById("img4");
let imagen5 = document.getElementById("img5");
let imagen6 = document.getElementById("img6");
let imagen7 = document.getElementById("img7");
let imagen8 = document.getElementById("img8");

let bloqueImg = document.getElementById("suelta");

let opa = 0;

let imagenes = [["", "imagen1"], ["", "imagen2"], ["", "imagen3"], ["", "imagen4"], ["", "imagen5"], ["", "imagen6"], ["", "imagen7"], ["", "imagen8"]];


for (let i = 0; i < 8; i++) {

  fetch(`https://aws.random.cat/meow`, { mode: 'no-cors'})
    .then((response) => response.json())
    .then((json) => imagenes[i][0] = json.body);

}

console.log(imagenes[0][0]); 

imagen1.src = imagenes[0][0];

imagen1.onclick = function () {
  opa = 1;

  bloqueImg.src = "../Images/imagen1.jpg";

  opacidad();
};

imagen2.onclick = function () {
  opa = 2;

  bloqueImg.src = "../Images/imagen2.jpg";

  opacidad();
};

imagen3.onclick = function () {
  opa = 3;

  bloqueImg.src = "../Images/imagen3.jpg";

  opacidad();
};

imagen4.onclick = function () {
  opa = 4;

  bloqueImg.src = "../Images/imagen4.jpg";

  opacidad();
};

imagen5.onclick = function () {
  opa = 5;

  bloqueImg.src = "../Images/imagen5.jpg";

  opacidad();
};

imagen6.onclick = function () {
  opa = 6;

  bloqueImg.src = "../Images/imagen6.jpg";

  opacidad();
};

imagen7.onclick = function () {
  opa = 7;

  bloqueImg.src = "../Images/imagen7.jpg";

  opacidad();
};

imagen8.onclick = function () {
  opa = 8;

  bloqueImg.src = "../Images/imagen8.jpg";

  opacidad();
};

function opacidad() {
  switch (opa) {
    case 1:
      imagen1.style.opacity = 0.5;
      imagen2.style.opacity = 1;
      imagen3.style.opacity = 1;
      imagen4.style.opacity = 1;
      imagen5.style.opacity = 1;
      imagen6.style.opacity = 1;
      imagen7.style.opacity = 1;
      imagen8.style.opacity = 1;
      break;
    case 2:
      imagen1.style.opacity = 1;
      imagen2.style.opacity = 0.5;
      imagen3.style.opacity = 1;
      imagen4.style.opacity = 1;
      imagen5.style.opacity = 1;
      imagen6.style.opacity = 1;
      imagen7.style.opacity = 1;
      imagen8.style.opacity = 1;
      break;
    case 3:
      imagen1.style.opacity = 1;
      imagen2.style.opacity = 1;
      imagen3.style.opacity = 0.5;
      imagen4.style.opacity = 1;
      imagen5.style.opacity = 1;
      imagen6.style.opacity = 1;
      imagen7.style.opacity = 1;
      imagen8.style.opacity = 1;
      break;
    case 4:
      imagen1.style.opacity = 1;
      imagen2.style.opacity = 1;
      imagen3.style.opacity = 1;
      imagen4.style.opacity = 0.5;
      imagen5.style.opacity = 1;
      imagen6.style.opacity = 1;
      imagen7.style.opacity = 1;
      imagen8.style.opacity = 1;
      break;
    case 5:
      imagen1.style.opacity = 1;
      imagen2.style.opacity = 1;
      imagen3.style.opacity = 1;
      imagen4.style.opacity = 1;
      imagen5.style.opacity = 0.5;
      imagen6.style.opacity = 1;
      imagen7.style.opacity = 1;
      imagen8.style.opacity = 1;
      break;
    case 6:
      imagen1.style.opacity = 1;
      imagen2.style.opacity = 1;
      imagen3.style.opacity = 1;
      imagen4.style.opacity = 1;
      imagen5.style.opacity = 1;
      imagen6.style.opacity = 0.5;
      imagen7.style.opacity = 1;
      imagen8.style.opacity = 1;
      break;
    case 7:
      imagen1.style.opacity = 1;
      imagen2.style.opacity = 1;
      imagen3.style.opacity = 1;
      imagen4.style.opacity = 1;
      imagen5.style.opacity = 1;
      imagen6.style.opacity = 1;
      imagen7.style.opacity = 0.5;
      imagen8.style.opacity = 1;
      break;
    case 8:
      imagen1.style.opacity = 1;
      imagen2.style.opacity = 1;
      imagen3.style.opacity = 1;
      imagen4.style.opacity = 1;
      imagen5.style.opacity = 1;
      imagen6.style.opacity = 1;
      imagen7.style.opacity = 1;
      imagen8.style.opacity = 0.5;
      break;
    default:
      console.log("Nada");
  }
}
