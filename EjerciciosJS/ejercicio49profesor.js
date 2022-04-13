const meses = ["Enero","Febrero","Marzo","Abril","Mayo",
"Junio","Julio","Agosto","Septiembre","Octubre",
"Noviembre","Diciembre"];
const departamentos = ["Dulces","Bebidas","Conservas"];
const MAX_MESES = meses.length;
const MAX_DEP = departamentos.length;

const costes = [];

for (let i=0; i < MAX_DEP; i++) {
    const item  = [];
    for (let j=0; j < MAX_MESES; j++) {
        item[j] = Math.floor(Math.random()*100000)+20000;
    }
    costes[i] = item;
}
console.log("Dulces: ", costes[0], "Bebidas: ", costes[1], "Conservas: ", costes[2]);

let maxCoste = -1;
let maxPos = -1;
for (let i=0; i< MAX_MESES; i++) {
    if (costes[0][i] > maxCoste) {
        maxCoste = costes[0][i];
        maxPos = i;

    }
}
console.log (`El mes ${meses[maxPos]} fue el de mayor coste con un valor de ${maxCoste}`);

let suma = 0;
for (let i=0; i < MAX_MESES; i++) {
    suma += costes[1][i];
}
console.log (`El promedido del departamento de ${departamentos[1]} fue ${suma/MAX_MESES}`);

let minCoste = Infinity;
let minPos = -1;
maxCoste = -Infinity;
maxPos = -1;
for (let i=0; i< MAX_MESES; i++) {
    if (costes[1][i] > maxCoste) {
        maxCoste = costes[1][i];
        maxPos = i;
    }
    if (costes[1][i] < minCoste) {
        minCoste = costes[1][i];
        minPos = i;
    }

}
console.log (`El mes ${meses[maxPos]} fue el de mayor coste con un valor de ${maxCoste}`);
console.log (`El mes ${meses[minPos]} fue el de menor coste con un valor de ${minCoste}`);

minPos = -1;
minCoste = Infinity;
for (let i=0; i < MAX_DEP; i++) {
    if (costes[i][11] < minCoste) {
        minCoste = costes[i][11];
        minPos = i;
    }
}
console.log (`El departamento ${departamentos[minPos]} fue el de menor coste en diciembre con un valor de ${minCoste}`);