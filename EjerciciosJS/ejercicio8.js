// Ejercicio 8

const prompt = require("prompt-sync")();

let sueldo = Number(prompt("Salario del trabajador: "));

if(sueldo>=1000){
    console.log("El sueldo no se modifica.");
} else {
    console.log("El nuevo sueldo es: " + (sueldo + (sueldo*15/100)) + " Euros");
}