class Factura {
    constructor (nombre,nif,impuesto=21.0) {
        this.nombre = nombre;
        this.nif = nif;
        this.impuesto = impuesto;
        this.cambio = 1;
        this.simbolo = '€';
        this.lineas = [];
    }
    getBaseImponible () {
        return this.lineas.reduce ((total,item)=>total+item.getImporte(),0);
        // return this.lineas.map(x=>x.getImporte()).reduce((x,y)=>x+y);
    }
    addLinea (linea) {
        linea.factura = this;
        this.lineas.push(linea);
        return this;
    }
    getTotal() {
        return Math.round(this.getBaseImponible()*this.impuesto / 100,2);
    }
    imprimir () {
        this.lineas.forEach(item=>console.log(item.imprimir()));
        console.log('Total: ',this.getTotal(),this.simbolo);
    }
}

class FacturaDolares extends Factura {
    constructor(nombre,nif,impuesto) {
        super (nombre,nif,impuesto);
        this.cambio = 1.1;
        this.simbolo = '$';
    }
}

class Linea {
    constructor (concepto,cantidad,precio) {
        this.concepto = concepto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.factura = null;
    }
    getImporte() {
        return this.precio*this.cantidad*this.factura.cambio;
    }
    imprimir () {
        return `${this.concepto} ${this.cantidad} ${this.precio} ${this.getImporte()}${this.factura.simbolo}`;
    }
}

const factura1 = new Factura("pepe","123456789");
factura1.addLinea (new Linea("cocacola",3,1.5));
factura1.addLinea (new Linea("galletas",2,3.0));
factura1.addLinea (new Linea("jamón",5,5.0));
factura1.imprimir();
const factura2 = new FacturaDolares("juan","723456789");
factura2.addLinea (new Linea("cocacola",3,1.5));
factura2.addLinea (new Linea("galletas",2,3.0));
factura2.addLinea (new Linea("jamón",5,5.0));
factura2.imprimir();
