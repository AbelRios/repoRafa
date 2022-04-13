// Ejercicio 4
// Diseñar un algoritmo que pida por teclado tres números;
// si el primero es negativo, debe imprimir el producto de
// los tres y si no lo es, imprimirá la suma.

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un número: "));
let number2 = Number(prompt("Introduce un segundo número: "));
let number3 = Number(prompt("Introduce un tercer número: "));

// La funcion isNan nos devuelve 'true' si la variable es NaN (not a number) o 'false' si al contrario.
if (isNaN(number1)||isNaN(number2)||isNaN(number3)){ 
    console.log("Ha introducido un carácter distinto a un número, por favor intente de nuevo.")
} else {
    if (number1<0){
        console.log("Al ser el primer número negativo el producto es " + (number1*number2*number3));
    } else {
        console.log("Al ser el primer número positivo la suma es " + (number1+number2+number3));
    }
}