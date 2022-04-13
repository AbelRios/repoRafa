// Ejercicio 1
// Dadas dos variables numéricas A y B, que el usuario debe teclear,
// se pide realizar un algoritmo que intercambie los valores de ambas
// variables y muestre cuánto valen al final cada una de ellas (recuerda la asignación).

const prompt = require("prompt-sync")(); // guardamos el paquete prompt-sync en la variable constante prompt

let number1 = Number(prompt("Introduce un número: "));

let number2 = Number(prompt("Introduce un segundo número: ")); // La función Number te transforma el string que introduzca el usuario a un número

let aux = number1;
number1 = number2;
number2 = aux;

console.log("Su segundo número ha sido: " + number1); // usamos el '+' para concatenar el string y la variable number1
console.log("Su primer número ha sido: " + number2);