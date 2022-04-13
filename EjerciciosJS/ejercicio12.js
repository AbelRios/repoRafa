/* Construir un algoritmo que te permita calcular la temperatura teniendo en cuenta el número de
sonidos emitidos por un grillo (en época de apareamiento) en un minuto, es una función que
depende de la temperatura. Como resultado de esto, es posible determinar el nivel de temperatura
haciendo uso de un grillo como termómetro.
La fórmula es:
T = N / 4 + 40, donde T es la temperatura en grados centígrados y N es el número de sonidos
emitidos por minuto.
Como el aparato para medir los sonidos puede fallar, hay que tener en cuenta que si el número de
sonidos es 0, es un error y debe de imprimir “error” */

console.clear();
const prompt = require ("prompt-sync")();
const n = Number(prompt("Número de sonidos del grillo por minuto: "));

if (isNaN(n)){
    console.log("El número de sonidos por minuto debe ser un NÚMERO");
} else {
    switch(n){
        case 0:
            console.log("ERROR");
            break;
        default:
            console.log("La temperatura es de: " + (n/4+40) + " ºC")
            break;
    }
}


// SOLUCION CON 'IF'
/*

if (isNaN(n)){
    console.log("El número de sonidos por minuto debe ser un NÚMERO");
} else if (n===0){
    console.log("ERROR");
} else {
    console.log("La temperatura es de: " + (n/4+40) + " ºC")
}

*/
