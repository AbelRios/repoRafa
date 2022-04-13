/* Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares a partir
de N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14. */

console.clear();
const prompt = require ("prompt-sync")();

const n = Number(prompt("Introduzca número N: "));
let contador=0;
let suma=0;

if(n%2===0){
    contador=n+2; // A partir de N, no se incluye N. Si se incluyera sólo hay que quitar el '+2'
} else {
    contador=n+1;
}

for (let i=0; i<n; i++){
    suma=suma+contador;
    contador=contador+2;
}
console.log("La suma de los "+ n +" números pares a partir de "+ n +" es: "+ suma);