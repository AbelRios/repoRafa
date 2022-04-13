function cliente(nombre, direccion, telefono, nif){
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
}

let descripcion = 0;
let cantidad = 0;
let precio = 0;

let elementos = [descripcion,cantidad,precio];

function empresa (nombre, direccion, telefono, cif){
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.cif = cif;
}

function factura (cliente, elementos){
    this.cliente = cliente;
    this.empresa = empresa;
    this.elementos = elementos;
    this.baseImponible = 0;
    this.iva = 0.21;
    this.total = 0;
    this.formaDePago = "contado";
    this.total = function() {
        let suma = 0;
        for(let item of elementos){
            suma += item[1]*item[2];
        }
        return suma;
    }
    this.totalIva = function() {
        let baseImponible = 0;
        for (let item of elementos){
            baseImponible += item[1]*item[2];
        }
        return suma + suma*iva;
    }
}

