/* 32.Ejercicio
El siguiente es el menú de un restaurante de bocadillos. Diseñar un algoritmo capaz de leer el
número de unidades consumidas de cada alimento ordenado y calcular la cuenta total. Vamos a
suponer que estos precios son fijos, es decir, que son constantes. */

console.clear();
const prompt = require("prompt-sync")();

const productos = ["Bocadillo de Jamón", "Refresco", "Cerveza", "Pan"];
const precios = [1.5,1.05,0.75,2];

console.log("Cuenta Total = " + cuentaFinal());

function cuentaFinal(){
    let cuenta=0;
    const max=precios.length;
    for(i=0;i<max;i++){
        let n = prompt("Cuántos " + productos[i] + " ha consumido?: ");
        cuenta += (n*precios[i]);
    }
    return cuenta;
}