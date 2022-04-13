/* 28.Ejercicio
Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta
atrás se introducirá por teclado. Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.
• Investigar cómo hacer los intervalos en JS */

console.clear();
const prompt = require("prompt-sync")();

let timer = Number(prompt("Introduzca tiempo de espera: "));

let temporizador = setTimeout(myRing, timer*1000); // setTimeout trabaja en ms, por eso el timer*1000
                    //Aquí pasamos parámetros por: - Referencia (al llamar al myRing), al setTimeout le pasamos una referencia a nuestra función
                    //                             - Valor (al pasar timer*1000), le pasas una copia del valor de timer multiplicado por mil

function myRing(){
    console.log("¡¡RING!!");
    clearTimeout(temporizador); // De esta manera limpiamos el temporizador (mas elegansia programil)
}





/* Vamos a hacer un contador para atrás

console.clear();
const prompt = require("prompt-sync")();

let timer = Number(prompt("Introduzca número de iteraciones: "));

for(let i=timer; i>0; i--){
    console.log(i);
}
console.log("¡¡RING!!");
*/
