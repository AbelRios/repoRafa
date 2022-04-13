// Ejercicio 10 - PRACTICANDO SWITCH

//  Construir un algoritmo que dado la categoría y sueldo de un trabajador calcule el aumento de
//  sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del trabajador y
//  su nuevo sueldo.

//  CATEGORIA INCREMENTO
//  1           15%
//  2           10%
//  3           6%
//  4           3%

console.clear();

const prompt = require("prompt-sync")();

let categoria = Number(prompt("Categoría del trabajador: "));
let sueldo = Number(prompt("Salario del trabajador: "));


if (isNaN(categoria)||isNaN(sueldo)) {
    console.log("El valor Categoría y Sueldo deben ser números");
} else {
    let incremento =0;  
    switch(categoria){          // con el switch ponemos una variable y en los distintos 'case' ponemos los posibles
        case 1: {               // valores que tenga la variable. y en el default ponemos lo que sea cualquier otro caso
            incremento=1.15;    // que no sea el de los distintos case que hemos declarado.
        break;
        }
        case 2:{
            incremento=1.1;
        break;
        }
        case 3:{
            incremento=1.06;
        break;
        }
        case 4:{
            incremento=1.03;
        break;
        }
        default:{
            console.log("El valor Categoría debe estar entre 1 y 4");
        }
    }
    if (incremento != 0){
        console.log("El nuevo salario es: " + (sueldo*incremento));
    }
}