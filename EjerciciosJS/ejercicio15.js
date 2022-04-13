/* Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero, se vuelva a pedir el
número por teclado, así hasta que se teclee un número mayor que cero, recuerda la estructura
while. */

console.clear();

const prompt = require ("prompt-sync")();

let number = Number(prompt("Introduce un número distinto a cero: "));

while (number === 0){
    number = Number(prompt("Introduce un número distinto a cero: "));
}
if (isNaN(number)){
    console.log("Es nulo, no es un número");
} else if (number % 2 === 0){
    console.log("El número es par");
} else {
    console.log("El número es impar");
}