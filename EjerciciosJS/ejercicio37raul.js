const prompt = require("prompt-sync")();
letraDni = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];
/*let dni = prompt("Introduce los 8 digitos del DNI: ");
let letra = dni % 23;
if (dni.length < 8 || dni.length > 8) {
    dni = Number(dni);
    console.log("Error, la pulisia va para tu casa");
} else {
    console.log("Tu DNI es", dni, letraDni[letra]);
}
*/
let dni;
do {
     dni = prompt("Introduce los 8 digitos del DNI: ");
    longitud = dni.length
}
while (longitud < 8 || longitud > 8){
    
}
console.log("Tu DNI es", dni, letraDni[Number(dni%23)])