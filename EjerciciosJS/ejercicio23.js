/* Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si
no es válida escribir un mensaje de error y volver a pedir los números. Si es válida escribir la fecha
cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de
febrero de 2006”. El año debe ser mayor que 0. (Recuerda la estructura switch).*/

console.clear();

const prompt = require("prompt-sync")();

// FORMA MÁS FÁCIL:
//  Si declaramos arrays, vamos directos a la hora de validar:

let nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let day;
let month;
let year;
let terminar = false;

do {
    day = Number(prompt("Introduzca día: "));
    month = Number(prompt("Introduzca mes: "));
    year = Number(prompt("Introduzca año: "));
    terminar = validarFecha(day, month, year);
    if (!terminar) {
        console.log("Fecha No Válida");
    }
} while (!terminar);
console.log("La fecha es el " + day + " de " + nombreMes[month - 1] + " de " + year);


function validarFecha(d, m, y) { //Función que nos diga 'true' si la fecha es válida
    let diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (m ===2 && y % 4 === 0){  //Aquí comprobamos si es febrero y bisiesto
        diasMes[m] = 29;
    }
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        console.log("Los valores día/mes/año deben ser numéricos.");
        return false;
    } else if (y < 0) {
        return false;
    } else if (m<0 || m>12) {
        return false;
    } else if(m<0 || m>12 || d<0 || d>diasMes[m-1]){
            return false;
    } else {
        return true;
    }
}



/*
let day = Number(prompt("Introduzca día: "));
let month = Number(prompt("Introduzca mes: "));
let year = Number(prompt("Introduzca año: "));

if (isNaN(day) || isNaN(month) || isNaN(year)) {
    console.log("Los valores día/mes/año deben ser numéricos.");
} else if ((day <= 0) || (day > 31) || (month <= 0) || (month > 12) || (year < 0)) {
    console.log("La fecha introducida es inválida.")
} else {
    switch (month) {
        case 1:
            month = "Enero";
            break;
        case 2:
            month = "Febrero";
            break;
        case 3:
            month = "Marzo";
            break;
        case 4:
            month = "Abril";
            break;
        case 5:
            month = "Mayo";
            break;
        case 6:
            month = "Junio";
            break;
        case 7:
            month = "Julio";
            break;
        case 8:
            month = "Agosto";
            break;
        case 9:
            month = "Septiembre";
            break;
        case 10:
            month = "Octubre";
            break;
        case 11:
            month = "Noviembre";
            break;
        default:
            month = "Diciembre";
            break;
    }
    console.log(day + " de " + month + " de " + year);
}
*/
