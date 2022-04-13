/* Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el
perímetro y la superficie del mismo.
Superficie= base*altura
Perímetro = 2*(base + altura)
Comprobar los resultados con varios datos de entradas diferentes. */

console.clear();

const prompt = require ("prompt-sync")();

const base = Number(prompt("Base del rectángulo en cm: "));
const altura = Number(prompt("Altura del rectángulo en cm: "));

if((isNaN(base))||(isNaN(altura))){
    console.log("Los valores base y altura deben ser numéricos")
} else if ((base<0)||(altura<0)){
    console.log("Los valores base y altura deben ser positivos");
} else {
    console.log("La superficie del cuadrado es de "+(base*altura)+" cm cuadrados y el perímetro es de "+(2*(base+altura))+" cm.");
}