// Ejercicio 6

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un número: "));

if (isNaN(number1)){
    console.log("Es nulo, no es un número");
} else if (number1%2===0){
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
