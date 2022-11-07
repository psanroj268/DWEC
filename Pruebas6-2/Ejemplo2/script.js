"use strict";

let equiposCasa = ["Girona", "Getafe", "Valladolid", "Celta de Vigo", "FC Barcelona", "Atletico de Madrid", "Real Sociedad", "Villareal", "Betis", "Rayo Vallecano"];
let equiposVisitantes = ["Athletic Club", "Cádiz CF", "Elche", "Osasuna", "Almería", "RCD Espanyol", "Valencia", "Mallorca", "Sevilla", "Real Madrid"];

let resultados = ["1", "X", "2"];

let generarLaQuiniela = document.getElementById("generaQuiniela");
let solicitud = document.getElementById("solicita");

solicitud.onclick = function(){
  solicitaQuiniela();
}

function aleatorioExclusivo(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function aleatorioInclusivo(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function cargaPartidos(newEquiposCasa, newEquiposVisitantes) {

  let partidoXResultado = {equipo1: "", equipos2: "", resultado: "" };

  let aleatorio1 = aleatorioExclusivo(0, newEquiposCasa.length);
  let aleatorio2 = aleatorioExclusivo(0, newEquiposVisitantes.length);

  partidoXResultado.equipo1 = newEquiposCasa[aleatorio1];
  partidoXResultado.equipo2 = newEquiposVisitantes[aleatorio2];
  partidoXResultado.resultado = resultados[aleatorioInclusivo(0, 2)];

  newEquiposCasa.splice(aleatorio1, 1);
  newEquiposVisitantes.splice(aleatorio2, 1);

  return partidoXResultado;
}

function solicitaQuiniela(){
  let newEquiposCasa = [...equiposCasa];
  let newEquiposVisitantes = [...equiposVisitantes];

  let quinielaPartidos = [{}];

  for (let i = 0; i < equiposCasa.length; i++) {
    quinielaPartidos[i] = cargaPartidos(newEquiposCasa, newEquiposVisitantes);

  }
  muestraPartidos(quinielaPartidos);
}

function muestraPartidos(quinielaPartidos){
  generarLaQuiniela.innerHTML = "";
  let partidosQuiniela = "<table>";

  for (let j = 0; j < equiposCasa.length; j++){
    partidosQuiniela += `<tr>`;
    partidosQuiniela += `<td>${quinielaPartidos[j].equipo1}</td>`;
    partidosQuiniela += `<td> vs </td>`;
    partidosQuiniela += `<td>${quinielaPartidos[j].equipo2}</td>`;
    partidosQuiniela += `<td> = </td>`;
    partidosQuiniela += `<td>${quinielaPartidos[j].resultado}</td>`;
    partidosQuiniela += `</tr>`;
  }
  partidosQuiniela += "</table>";

  generarLaQuiniela.innerHTML = partidosQuiniela;
}




