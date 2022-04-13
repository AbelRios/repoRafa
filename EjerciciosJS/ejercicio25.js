/* Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese
tamaño. Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
Ejemplo, para lado = 4 escribiría:
* * * *
*     *
*     *
* * * *
Recuerda la estructura repetitiva For. */

console.clear();
const prompt = require("prompt-sync")();

let lado = prompt("Introduzca tamaño del lado del cuadrado: ");

for (let i=0; i<lado; i++){
    console.log (imprimir_linea(i));
}

// Esta función simplemente imprime un string que es una linea

function imprimir_linea(num_linea){
    if (num_linea === 0 || num_linea === lado-1){
        return rellenar_linea("* ","* ") // primera y última línea
    } else {
        return rellenar_linea("* ","  ") // líneas centrales
    }
}
/*
Esta función rellena una línea con el caracter 'extremo' en los extremos y
el caracter 'central' en el centro el número de veces necesario (lado)
*/

function rellenar_linea(extremo, central){
    let linea = "";
    let caracter;
    for (let j=0;j<lado;j++){
        if(j===0 || j===lado - 1){
            caracter = extremo;     
        } else {
            caracter = central;
        }
        linea += caracter;    //Estamos rellenando la línea con '*' o con espacios
    }
    return linea; 
}