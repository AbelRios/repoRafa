console.clear();
const prompt = require("prompt-sync")();

let n = prompt("Introduzca Número: ");
let primo=true;
for (let i=2; i<n; i++){
    if (n%i===0){
        primo=false;
    }
}
if(primo===true){
    console.log("Es primo");
} else {
    console.log("No es primo");
}