console.clear();
const prompt = require("prompt-sync")();

let miArray=[];
let item;

arrayNombres();

function arrayNombres(){ // Ejercicio 48
    let i=0;
    do{
        item= prompt("Introduzca un nombre, pulse Intro para terminar el array: ")
        if(item!==""){
            miArray[i++]=item;
            // Esto es lo mismo que
            // miArray[i]=item;
            // i++;
        }
    }while (item!=="");
}

console.log(miArray);
miArray.sort((a,b)=> a>b ? 1:-1); //Función flecha que es lo mismo que la función 'compare' de más abajo

// Esto es lo mismo que (función normal):
//     function compare(a,b){
//         return (a>b) ? 1: -1;
//     } 

// Que a su vez es lo mismo que (función anónima):
// const compare = function (a,b) {
//     return (a>b) ? 1: -1;
// } 
// OJO: al meterla en una variable, esto habría que declararlo ANTES de que llamemos a 'compare' cuando usamos el .sort

/* function compare(a,b){
    if (a>b){
        return 1;
    } else {
        return -1;
    }
} */
console.log(miArray);



/* for (let i=0; i<5; i++){ //Ejercicio 47
    miArray[i] = Math.floor((Math.random()*100)+1);
} */
