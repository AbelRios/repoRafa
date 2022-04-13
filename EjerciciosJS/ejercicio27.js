/* 27.Ejercicio
Desarrollar un algoritmo que imprima la tabla de multiplicación del número N introducido por
teclado. Para N = 13, el output sería:
13 X 1 = 13
13 X 2 = 26
…
13 X 10 = 130 */

console.clear();
const prompt = require("prompt-sync")();

const max = 10;
let number = Number(prompt("Introduzca el número: "));
for(let i = 1; i<=max ; i++){
    console.log(number ," X ", i ," = ", (number*i));
}