// -Crear un script que defina un objeto llamado Producto_alimenticio.
// -Este objeto debe presentar las propiedades código, nombre y precio, además del método imprimeDatos, 
//  el cual escribe por pantalla los valores de sus propiedades.
// -Posteriormente, cree tres instancias de este objeto y guárdelas en un array.
// Posteriormente, utilice el método imprimeDatos para mostrar por pantalla los 
// valores de los tres objetos instanciados

console.clear();

class Producto_alimenticio {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos () {
         // console.log(this);
        console.log("Nombre:",this.nombre,"Codigo:",this.codigo,"Precio:",this.precio);
    }
}

const galleta = new Producto_alimenticio(456,"Galletas",3.4);
const jamon = new Producto_alimenticio(333,"jamon", 5.0);
const leche = new Producto_alimenticio(444, "leche", 4.5);

let array = [galleta,jamon,leche];

for(let item of array){
    item.imprimeDatos();
}