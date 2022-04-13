// Mantener un array donde tengamos una lista de especies de animales y el número de patas que tiene cada uno.
// Crear una función que calcule un número aleatorio entre 1 y 100 para cada tipo de animal, 
// de tal modo que devuelva finalmente el número de patas que hay en la granja

console.clear();

class Animal {
    constructor (nombre,patas){
        this.nombre = nombre;
        this.patas = patas;
        this.cantidad = Animal.random();
    }
    totalPatas() { // -> este método te simplifica las multiplicaciones
        return this.patas * this.cantidad;
    }
    static random(){
        return Math.floor(Math.random()*100)+1;
    }
}
class Granja {
    constructor(){
        this.poblacion = [];
    }
    add (animal){
        this.poblacion.push(animal);
    }

    calcularPatas() {
        // let suma = 0;
        // for (let item of this.poblacion){
        //     // suma += item.patas*item.cantidad;
        //     suma += item.totalPatas();
        // }
        // console.log("En total tenemos ", suma, " patas en la granja."); // no imprimas aquí. Mejor lo situas en list()
        // return this.poblacion.reduce ((total,item)=>total+item.patas*item.cantidad,0); 
        // esta sentencia te cálcula el total, sustituyendo el bucle y la variable suma
        //
        // también puedes enlazar un map con un reduce, usando lo siguiente:
        // experimenta con ellas y me cuentas. Si no las entiendes mañana las analizamos en clase.
        return this.poblacion.map ((x) => x.totalPatas()).reduce ((x,y) => x+y);
    }
    list(){
        for(let item of this.poblacion){
            console.log ("De ", item.nombre, " hay ", item.cantidad, 
            " especímenes en la granja, cada uno con ", item.patas, 
            " patas. En total",item.patas*item.cantidad,"patas");
        }
        console.log("En total tenemos ", this.calcularPatas(), " patas en la granja.");
    }
} 

const granja = new Granja;

const cerdo = new Animal("Cerdo", 4);
const gallina = new Animal("Gallina", 2);
// const gamusino = new Animal("Gamusino", 3);
// const flamenco = new Animal("Flamenco",1);
// const pulpo = new Animal("Pulpo",8);

granja.add(cerdo);
granja.add(gallina);
// granja.add(gamusino);
// granja.add(flamenco);
// granja.add(pulpo);

granja.list();
//granja.calcularPatas();
