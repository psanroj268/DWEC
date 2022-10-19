"use strict";

let frase1 = document.getElementById("frase");

let cambio = document.getElementById("botont");

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

document.getElementById("boton11").addEventListener("click", aleatorio3);

function aleatorioExclusivo(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

cambio.onclick = function () {
  console.log("cambio clicked");
  let aleatoria = aleatorioExclusivo(0, 100);

  document.getElementById("frase").innerHTML = "";

  fetch(`https://jsonplaceholder.typicode.com/posts/${aleatoria}`)
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("frase").innerHTML = `${json.body}`;
    });
};

function parado() {
  clearInterval(identificador);
  console.log("Hemos parado");
}

let lapso = 5000;
let identificador;

document.getElementById("boton13").addEventListener("click", rapida);
document.getElementById("boton14").addEventListener("click", lenta);

function intervalo() {
  identificador = setInterval(aleatoriedad, lapso);
}

function rapida() {
  clearInterval(identificador);
  lapso = lapso - 1000;
  console.log("Hemos rapida");
  console.log(lapso);
  identificador = setInterval(aleatoriedad, lapso); 
}

function lenta() {
  clearInterval(identificador);
  lapso = lapso + 1000;
  console.log("Hemos lento");
  console.log(lapso);
  identificador = setInterval(aleatoriedad, lapso); 
}

function aleatorio3() {
  console.log(lapso);
  intervalo();

  document.getElementById("boton12").addEventListener("click", parado);
}

function aleatoriedad() {
  let aleatorio2 = Math.floor(Math.random() * 10);
  console.log(aleatorio2);

  switch (aleatorio2) {
    case 0:
      frase1.value = frase1.value.toUpperCase();
      break;

    case 1:
      frase1.value = frase1.value.toLowerCase();
      break;

    case 2:
      const palabras = frase1.value.split(" ");

      for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
      }

      frase1.value = palabras.join(" ");
      break;

    case 3:
      frase1.value = frase1.value
        .split(" ")
        .map(function (l) {
          return l.slice(0, -1) + l.slice(-1).toUpperCase();
        })
        .join(" ");
      break;

    case 4:
      const palabras2 = frase1.value.split(" ");

      for (let i = 0; i < palabras2.length; i++) {
        palabras2[i] = palabras2[i][0].toLowerCase() + palabras2[i].substr(1);
      }

      frase1.value = palabras2.join(" ");
      break;

    case 5:
      frase1.value = frase1.value
        .split(" ")
        .map(function (l) {
          return l.slice(0, -1) + l.slice(-1).toLowerCase();
        })
        .join(" ");
      break;

    case 6:
      frase1.value = frase1.value.replace(/[aeiou]/g, function (l) {
        return l.toUpperCase();
      });
      break;

    case 7:
      frase1.value = frase1.value.replace(/[AEIOU]/g, function (l) {
        return l.toLowerCase();
      });
      break;

    case 8:
      frase1.value = frase1.value.replace(
        /[bcdfghjklmnñpqrstvwxyz]/g,
        function (l) {
          return l.toUpperCase();
        }
      );
      break;

    case 9:
      frase1.value = frase1.value.replace(
        /[BCDFGHJKLMNÑPQRSTVWXYZ]/g,
        function (l) {
          return l.toLowerCase();
        }
      );
      break;
  }
}

mayusculas.onclick = function () {
  frase1.value = frase1.value.toUpperCase();
};

minusculas.onclick = function () {
  frase1.value = frase1.value.toLowerCase();
};

priMayus.onclick = function () {
  const palabras = frase1.value.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
  }

  frase1.value = palabras.join(" ");
};

ultMayus.onclick = function () {
  frase1.value = frase1.value
    .split(" ")
    .map(function (l) {
      return l.slice(0, -1) + l.slice(-1).toUpperCase();
    })
    .join(" ");
};

priMinus.onclick = function () {
  const palabras = frase1.value.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i][0].toLowerCase() + palabras[i].substr(1);
  }

  frase1.value = palabras.join(" ");
};

ultMinus.onclick = function () {
  frase1.value = frase1.value
    .split(" ")
    .map(function (l) {
      return l.slice(0, -1) + l.slice(-1).toLowerCase();
    })
    .join(" ");
};

vocMayus.onclick = function () {
  frase1.value = frase1.value.replace(/[aeiou]/g, function (l) {
    return l.toUpperCase();
  });
};

vocMinus.onclick = function () {
  frase1.value = frase1.value.replace(/[AEIOU]/g, function (l) {
    return l.toLowerCase();
  });
};

conMayus.onclick = function () {
  frase1.value = frase1.value.replace(
    /[bcdfghjklmnñpqrstvwxyz]/g,
    function (l) {
      return l.toUpperCase();
    }
  );
};

conMinus.onclick = function () {
  frase1.value = frase1.value.replace(
    /[BCDFGHJKLMNÑPQRSTVWXYZ]/g,
    function (l) {
      return l.toLowerCase();
    }
  );
};
