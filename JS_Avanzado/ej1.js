// -Crear un script que defina un objeto llamado Producto_alimenticio.
// -Este objeto debe presentar las propiedades código, nombre y precio, además del método imprimeDatos, 
//  el cual escribe por pantalla los valores de sus propiedades.
// -Posteriormente, cree tres instancias de este objeto y guárdelas en un array.
// Posteriormente, utilice el método imprimeDatos para mostrar por pantalla los valores de los tres objetos instanciados

const prompt = require("prompt-sync")();

function producto (codigo, nombre, precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.imprimeDatos = function (){
        console.log("Código: ", codigo, ", Nombre: ", nombre, ", Precio: ", precio);
    }
    this.reset = function(){
        codigo="---";
        nombre="---";
        precio=0;
    }
}

console.clear();

let manzana = new producto("24SV", "Manzana", 0.5);
let naranja = new producto("35RH", "Naranja", 0.35);
let pera = new producto("48HG", "Pera", 0.46);

manzana.imprimeDatos();
naranja.imprimeDatos();
pera.imprimeDatos();

console.log("------------------");

let miArray = [manzana,naranja,pera];

for (let i=0, max=miArray.length; i<max; i++){
    miArray[i].imprimeDatos();
}

console.log("---------------");

manzana.reset();

for (let item of miArray){
    item.imprimeDatos();
}
