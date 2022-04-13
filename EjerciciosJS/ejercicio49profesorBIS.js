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

function buscarConCondicion (lista, comparacion) {
    let pos = 0;
    let valor = lista[0];
    for (let i=0, len=lista.length; i< len; i++) {
          if (comparacion (lista[i],valor)) {
            valor = lista[i];
            pos = i;
        }
    }
    return [pos,valor];
}

let value = buscarConCondicion (costes[0], (x,y) => (x>y));
console.log (`El mes ${meses[value[0]]} fue el de mayor coste con un valor de ${value[1]}`);

// PROMEDIO
let suma = 0;
for (let i=0; i < MAX_MESES; i++) {
    suma += costes[1][i];
}
console.log (`El promedido del departamento de ${departamentos[1]} fue ${suma/MAX_MESES}`);

value = buscarConCondicion (costes[1], (x,y) => (x>y));
console.log (`El mes ${meses[value[0]]} fue el de mayor coste con un valor de ${value[1]}`);
value = buscarConCondicion (costes[1], (x,y) => (x<y));
console.log (`El mes ${meses[value[0]]} fue el de menor coste con un valor de ${value[1]}`);

value = buscarConCondicion (costes, (x,y) => (x[11] < y[11]));
console.log (`El departamento ${departamentos[value[0]]} fue el de menor coste en diciembre con un valor de ${value[1][11]}`);