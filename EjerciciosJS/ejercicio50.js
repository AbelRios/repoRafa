console.clear();
const prompt = require("prompt-sync")();

let frase = prompt("Escribe: ");
let letra = prompt("Qué letra quieres contar? ");
let cont=0;
for(let i=0; i<frase.length; i++){
    if(frase[i]===letra){
        cont++;
    }
}
console.log(cont);