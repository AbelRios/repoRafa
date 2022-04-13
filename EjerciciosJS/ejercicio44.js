//Ejercicio 44 (con el array de funciones flecha)

const prompt = require("prompt-sync")();

const operacion = [(x, y) => x + y, (x, y) => x - y, (x, y) => x * y, (x, y) => x / y];

let number1 = Number(prompt("Introduce un número: "));
let number2 = Number(prompt("Introduce un segundo número: "));
let opcion = 0;

do {
    opcion = Number(prompt("Seleccione el número de una de las siguientes opciones: 1: Sumar, 2: Restar, 3: Multiplicar, 4: Dividir, 5: Salir del programa."));

    switch (opcion) {
        case 1:
            console.log("La suma es: ", operacion[0](number1, number2));
            break;
        case 2:
            console.log("La resta es: ", operacion[1](number1, number2));
            break;
        case 3:
            console.log("La multiplicación es: ", operacion[2](number1, number2));
            break;
        case 4:
            console.log("La división es: ", operacion[3](number1, number2));
            break;
        case 5:
            console.log("Adiós");
            break;
        default:
            console.log("Opcion Incorrecta");
            break;
    }
} while (opcion !==5);
