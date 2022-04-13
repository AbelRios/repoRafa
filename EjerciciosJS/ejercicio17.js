/*Se pide representar un algoritmo que nos calcule la suma de los N primeros números naturales. N
se leerá por teclado.*/


console.clear();

const prompt = require ("prompt-sync")();

const n = Number(prompt("Introduzca número N: "));
let suma = 0;
/*
let contador = 1;

while (contador<=n){
    suma=suma+contador;
    contador=contador+1;
    console.log(suma);
}*/

for (let i=1; i<=n; i++){
    suma=suma+i;
}
console.log("La suma de los "+ n +" primeros números naturales es " + suma);
