/* 45.Ejercicio
Teniendo un vector con los números naturales que queramos, meter en otro de la misma longitud,
aquellos que sean pares y mayores que 25.
Después, mostrar el vector de origen completo y el de destino solo los números introducidos. */

console.clear();
const prompt = require("prompt-sync")();

const maxArray = 10;
const maxValor = 25;
let vector1 = [];
let vector2 = [];

for (let i = 0; i < maxArray; i++) {
    vector1[i] = Math.floor(Math.random()*100+1);
    //Aquí generamos números random entre 0 y 100 (99 +1)
    //Math.floor se  queda con el número entero, redondeando por abajo. 
    //Math.random te genera un número aleatorio entre [0 y 1) por eso sumamos 1 al final, 
    //porque nunca te generará el 1, siempre se quedará en 0'99999... como máximo (que con floor es 9)
    
    if ((vector1[i] % 2 === 0) && (vector1[i] > maxValor)){
        vector2[i] = vector1[i];
    } else {
        vector2[i] = null;
    }
}

console.log(vector1);
console.log(vector2);