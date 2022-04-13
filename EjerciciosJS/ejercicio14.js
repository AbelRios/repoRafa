/* Construir un algoritmo que resuelva el problema que tienen unos surtidores de gasolina, que
registran lo que surten en galones, pero el precio de la gasolina se fija en litros. El algoritmo debe
calcular e imprimir el precio que hay que cobrarle al cliente.
Precio gasolina = 1.333€/litro
1 galón = 3,78541 litros */

console.clear();

const prompt = require ("prompt-sync")();

const galon = Number(prompt("Cuántos galones marca el surtidor?: "));
const precio = 1.333;
const conversion = 3.78541;

while ((galon<=0)||(isNaN(galon))){
    console.log("El valor de galones que marca el surtidor debe ser un número mayor que 0.");
    galon = Number(prompt("Cuántos galones marca el surtidor?: ")); 
}
console.log("El precio a pagar es de "+(galon*conversion*precio)+" Euros."); 


//SOLUCION CON 'IF'

/* if(isNaN(galon)){
    console.log("El valor de galones que marca el surtidor debe ser un número.");
} else if (galon<0){
    console.log("El valor de galones que marca el surtidor debe ser mayor que cero.");
} else {
    console.log("El precio a pagar es de "+(galon*conversion*precio)+" Euros.");
} */