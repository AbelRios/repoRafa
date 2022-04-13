// -Crea una clase que llamaremos Bus. Sus atributos serán:
// -capacidad: número máximo de pasajeros
// -pasajeros: número de pasajeros (inicialmente 0)
// -conductor: objeto conductor.
// -Sus métodos
// -subir(pasajeros): aumenta el numero de pasajeros
// -bajar(pasajaeros): disminuye el número de pasajeros
// -conductor: asigna un objeto conductor.
// -El ojeto conductor es de una clase (Conductor) cuyos atributos son:
// -nombre: nombre del conductor
// -licencia: un número que identifica al condcutor.
// -Al crear el objeto se asigna también el conductor
// -No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.

function bus (nombre,capacidad, conductor){
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.pasajeros = 0;
    this.conductor = conductor;
    this.conductor.bus = this.nombre;

    this.subir = function(pasajeros){
        console.log("En el autobús", this.nombre, " hay ", this.pasajeros, " pasajeros, caben máximo ", this.capacidad, " pasajeros y quieren subir ", pasajeros);
        if(this.pasajeros + pasajeros <= capacidad){
            this.pasajeros += pasajeros;
        }
        console.log("En el autobús ", this.nombre, " hay ahora ", this.pasajeros, " pasajeros");
    }
    this.bajar = function(pasajeros){
        console.log("En el autobús", this.nombre, " hay ", this.pasajeros, " pasajeros, y quieren bajar ", pasajeros);
        if(this.pasajeros >= pasajeros){
            this.pasajeros -= pasajeros;
        }
        console.log("En el autobús ", this.nombre, " hay ahora ", this.pasajeros, " pasajeros");
    }
    this.cambiarConductor = function(conductor){
        this.conductor = null;
        this.conductor = conductor;
        this.conductor.bus = this.nombre; //al objeto conductor le asignamos este bus
    }
}
function conductor (nombre, licencia){
    this.nombre = nombre;
    this.licencia = licencia;
    this.bus = null;
}

let ramon = new conductor("ramon", "4567-J");
let bus1 = new bus("C4", 20, ramon);
let andres = new conductor("andres","4553L");
let bus2 = new bus("N1", 36, andres);
bus1.subir(16);
bus2.subir(13);
let jose = new conductor("jose", "3456H");
bus1.cambiarConductor(jose);
bus1.bajar(3);
bus2.bajar(11);

console.log(bus1);
console.log(bus2);