/* Dada una secuencia de longitud indefinida de números leídos por teclado, que acabe con un –1,
por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; Realizar el algoritmo que calcule la media aritmética.
Suponemos que el usuario no insertará número negativos.*/

console.clear();

const prompt = require ("prompt-sync")();

let number = Number(prompt("Introduzca número: "));
let cadena = [];
let indice = 0;
let suma = 0;

while(number!= -1){
    cadena[indice]=number;
    indice++;
    number = Number(prompt("Introduzca número: "));
}
for (const i of cadena){ // Otro tipo de uso del 'for' cuando estamos trabajando con arrays
    suma = suma + i;
}


/* for(let i=0; i<cadena.length; i++){   // usamos la función .length para que te de la longitud del array
    suma = suma + cadena[i];
}*/

console.log("La media de los números introducidos es: " + (suma/indice));