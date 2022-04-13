/* 26.Ejercicio
Desarrollar un algoritmo que lea 10 números por teclado y calcule el cubo de cada uno de ellos. En
cada lectura, tiene que indicar por pantalla el número que está pidiendo. Ejemplo de salida por
pantalla:

Introduce el número 1º.
➢ 8
El cubo de 8 es 512.
Introduce el número 2º. */

console.clear();
const prompt = require("prompt-sync")();
const maxIter = 10;

for (let i=0; i<maxIter; i++){
    let number = Number(prompt("Introduzca el número "+ (i+1) + "º: "));
    console.log("El cubo de "+ number +" es "+ (number**3));
}

