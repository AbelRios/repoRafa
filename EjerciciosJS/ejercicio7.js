// Ejercicio 7

const prompt = require("prompt-sync")();

let coste = Number(prompt("Coste del producto: "));
let pago = Number(prompt("Pago: "));

if(coste>pago){
    console.log("Faltan " + (coste-pago) + " Euros");
} else {
    console.log("El cambio es " + (pago-coste) + " Euros");
}