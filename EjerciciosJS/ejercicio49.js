// 49.Ejercicio
// Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas)
// correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:
// a) ¿En qué mes se registró el mayor coste de producción de dulces?
// b) Promedio anual de los costes de producción de bebidas
// c) ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor
// coste?
// d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?


console.clear();
const prompt = require("prompt-sync")();

// 'costes' va a ser un array de 3 elemenstos que a su vez son arrays 
// de 12 elementos en los que almacenaremos los costes
let costes = []; 

const departamentos = ["Dulces", "Bebidas", "Conservas"];

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", 
                "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const maxMeses = meses.length;
const maxDep = departamentos.length;


//  Aquí rellenamos los costes de los departamentos con números aleatorios
for (let i=0; i<maxDep; i++){  
    const item = [];
    for (let j=0; j<maxMeses;j++) {
        item[j] = Math.floor((Math.random() * 100000) + 1);
    }
    costes[i]=item;
}

console.log("Dulces: ", costes[0], "Bebidas: ", costes[1], "Conservas: ", costes[2]);

// Aquí creamos la funcion buscarEnArray que nos devolverá la posicion del array en la que se encuentra
// el mayor o el menor valor. La usaremos para la pregunta a) y para la pregunta c)

const buscarEnArray = function (miArray, orden){ // miArray es un array, orden es un booleano 
    let aux = -1;                               // true busca al mayor, false busca al menor (de todo el array)  
    let posicion = -1; 
    if (orden){
        for (let i=0; i<maxMeses; i++){
            if(miArray[i]>aux){
                posicion=i;
                aux=miArray[i];
            }
        }
    } else {
        aux = Infinity;
        for (let i=0; i<maxMeses; i++){
            if(miArray[i]<aux){
                posicion=i;
                aux=miArray[i];
            }
        }
    }
    return posicion;
}


//Esta función va a buscar en el array el mayor o menor (dependiendo de la condición) dependiendo del array
//y nos devuelve un array con la posición del que estamos buscando y su valor.

// const buscarEnArray = function (miArray, comparacion){
//     let pos = 0;
//     let valor = miArray[0];
//     for (let i = 0; let max = miArray.length; i < max; i++){
//         if (comparacion(lista[i], valor)){
//             valor = lista [i];
//             pos = i;
//         }
//     }
//     return [pos,valor];
// }

// Y ahora le podemos decir:
// let a = buscarEnArray(costes[0], (x,y)=>(x>y)); // para buscar el mayor
// let b = buscarEnArray(costes[0], (x,y)=>(x<y)); // para buscar el menor

// a) Ahora buscamos el mes de mayor costes de Dulces

console.log("El mes de mayor coste de Dulces fue ", meses[buscarEnArray(costes[0],true)], 
            " con un total de: ", costes[0][buscarEnArray(costes[0],true)]);


// Ahora vamos a hacer una función que calcule el promedio de gastos de un departamento en todo el año

function promedio(miArray){
    let media=0;
    for(let i=0; i<maxMeses; i++){
        media += miArray[i];
    }
    return media/maxMeses;
}

// b) Simplemente le pasamos la función a nuestro array de bebidas y la mostramos por pantalla

console.log("El promedio de costes de Bebidas del año pasado fue: ", promedio(costes[1]));

//c) Usamos la función buscarEnArray con 'true' para el mayor y con 'false' para el menor

console.log("El mes de mayor coste de Bebidas fue ", meses[buscarEnArray(costes[1],true)], 
            " con un total de: ", costes[1][buscarEnArray(costes[1],true)]);

console.log("El mes de menor coste de Bebidas fue ", meses[buscarEnArray(costes[1],false)], 
            " con un total de: ", costes[1][buscarEnArray(costes[1],false)]);

// d) Tenemos que comparar los tres gastos de diciembre y buscar el menor
//  Lo vamos a complicar un poco y pedirle al usuario qué mes quiere comparar, 
//  para que sea más útil (no sólo diciembre)


//He creado una función para pedirle al usuario qué mes quiere comparar
// y asegurarme que introduce un mes que existe en el array de meses
// y nos devuelve el indice del array del mes que el usuario quiere
function dameUnMes(){
    let mes ="";
    let index=-1;
    do{
        mes = prompt("¿Qué mes quiere comparar los gastos?: ");
        for (let i=0;i<maxMeses;i++){
            if (mes===meses[i]){
                index=i;
            }
        }
        if(index===-1){         //Aquí nos aseguramos que el usuario introduce un mes válido y no cualquier string
            console.log("Mes No Válido")
        }
    }while(index=== -1)
    return index;
}

//  Aquí vamos a comparar el mes que el usuario ha introducido en los tres arrays para buscar el menor coste
//  (también se podría hacer como arriba en la funcion buscarEnArray para comparar el mayor o el menor)
function compararCostes(){
    let number = dameUnMes();
    let aux=Infinity;
    let departamento;
    for (let i=0; i<maxDep;i++){
        if (costes[i][number]<aux){
            aux=costes[i][number];
            departamento=i;
        }
    }
    console.log("En el mes de ", meses[number], " el departamento con menor coste fue ",
                departamentos[departamento], " con un coste de: ", costes[departamento][number]);
}

compararCostes();

