//  Ejercicio 9

const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Nota de Asignatura 1: "));
let nota2 = Number(prompt("Nota de Asignatura 2: "));
let nota3 = Number(prompt("Nota de Asignatura 3: "));
let nota4 = Number(prompt("Nota de Asignatura 4: "));
let nota5 = Number(prompt("Nota de Asignatura 5: "));

let media = ((nota1+nota2+nota3+nota4+nota5)/5);

if(media>=5){
    console.log("El alumno ha aprobado. La nota media es: " + media);
} else {
    console.log("El alumno ha suspendido. La nota media es: " + media);
}

