/* 33.Ejercicio
Crear un array de tamaño 10 y que guardará números enteros introducidos por teclado.
Tras introducirlos todos, imprimirá cada índice junto con el valor al que corresponda. */

console.clear();
const prompt = require("prompt-sync")();

let miArray=[];
let maxArray=10;

for (let i=0;i<maxArray; i++){
    miArray[i]=Number(prompt("Introduzca número: "));
}

for (let i=0;i<maxArray;i++){
    console.log("En la posición ", i+1 ," el número es: ", miArray[i]);
}