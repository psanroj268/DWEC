"use strict"

// ACCIONES
document.getElementById("nParejas").addEventListener("click", nParejas);
let parejas = [];
let parejas2 = [];

async function nParejas() {
    let numParejas = parseInt(document.getElementById("numParejas").value);
    for (let i=0; i<numParejas; i++) {
        let json = await cargarAPIWeb("https://dog.ceo/api/breeds/image/random"); // CAMBIA de API a API
        let json2 = await cargarAPIWeb(`https://randomuser.me/api/?results=${numParejas}`); // CAMBIA de API a API
        parejas[i] = json;
        parejas2[i] = json2;
    }
    for (let usuario of parejas2) {
        // document.getElementById("resTexto").innerHTML += `Nombre: ${usuario["name"]["first"]}, Apellido: ${usuario["name"]["last"]} <br />`;
        document.getElementById("resTexto2").innerHTML += `<img src="${usuario["picture"]["medium"]}" alt="${usuario["email"]}" /> <br />`;
    }

    console.log(parejas);
    mostrar(parejas);
    console.log(parejas2);
    mostrar(parejas2);
}

async function cargarAPIWeb(url) {
    const response = await fetch(url);
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    return response.json();
}

function mostrar() {
    document.getElementById("resTexto").innerHTML = ""; //LIMPIAR EL AREA DE 'resultado'
    for (let i=0;i<parejas.length;i++) {
        document.getElementById("resTexto").innerHTML += `<img src="${parejas[i].message}" width="100px" height="100px"> <br />`;

    }
    parejas = [];

    parejas2 = [];
}

