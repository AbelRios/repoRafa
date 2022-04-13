// Desarrollar un algoritmo que nos calcule el cuadrado de los 9 primeros números naturales.

console.clear();

const n = 9;
/*
let contador = 1;
while(contador<=n){
    console.log(contador**2);
    contador = contador+1;
} */

for(let i = 1; i <= n; i++){
    console.log("El cuadrado de "+ i + " es " + i**2);
}