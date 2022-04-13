//  Ejercicio 2
// Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un número: "));

let number2 = Number(prompt("Introduce un segundo número: "));

let numberSuma=(number1+number2);
let numberResta=(number1-number2);
let numberProducto=(number1*number2);
let numberDivision=(number1/number2);

console.log("La suma de los dos números es: ", numberSuma);
console.log("La resta de los dos números es: ", numberResta);
console.log("El producto de los dos números es: ", numberProducto);
console.log("La división de los dos números es: ", numberDivision);