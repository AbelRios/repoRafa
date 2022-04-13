// Mantener un array donde tengamos una lista de especies de animales y el número de patas que tiene cada uno.
// Crear una función que calcule un número aleatorio entre 1 y 100 para cada tipo de animal, 
// de tal modo que devuelva finalmente el número de patas que hay en la granja
 
console.clear();

class Animal {
    constructor (nombre,patas){
        this.nombre = nombre;
        this.patas = patas;
        this.cantidad = 0;
    }
}
class Granja {
    poblacion = [];

    add (animal){
        animal.cantidad = Math.floor(Math.random() * 100) + 1;
        this.poblacion.push(animal);
    }

    calcularPatas() {
        let suma = 0;
        
        for (let item of this.poblacion){
            suma = suma + item.patas*item.cantidad;
            console.log ("De", item.nombre, "hay", item.cantidad, 
            "especímenes en la granja, cada uno con",item.patas,"patas.");
        }
        console.log("En total tenemos", suma, "patas en la granja.");
    }
} 

const granja = new Granja;
const cerdo = new Animal("Cerdo", 4);
const gallina = new Animal("Gallina", 2);
const gamusino = new Animal("Gamusino", 3);
const flamenco = new Animal("Flamenco",1);
const pulpo = new Animal("Pulpo",8);

granja.add(cerdo);
granja.add(gallina);
granja.add(gamusino);
granja.add(flamenco);
granja.add(pulpo);

granja.calcularPatas();
