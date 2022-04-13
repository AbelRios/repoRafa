// Necesitamos una clase Factura que mantenga los siguientes datos:
// - Nombre y apellidos
// - NIF / CIF
// - Líneas de factura
// La clase nos permitirá las siguientes acciones:
// - Al crear la factura se pedirá el nombre del cliente y el nif
// - Añadir linea de factura especificando concepto, precio en euros y cantidad
// - Calcular total de la factura, especificando el porcentaje de impuestos a aplicar
// - Imprimir factura: listar cada linea de factura calculando el importe de línea finalmente imprimir el total.
// Crearemos una clase derivada de factura que nos convierta los precios a dolares, tanto al calcular como al imprimir cada línea 
// de la factura.Tratar de usar los conceptos de herencia y la palabra reservada super cuando sea necesario.La clase derivada facturaDolares 
// debería tener muy poco código.

console.clear();

class Pedido{
    constructor(concepto, precio, cantidad){
        this.concepto = concepto;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    totalPedido(){ //Aquí aún no tenemos en cuenta el impuesto aplicado
        return this.precio*this.cantidad;
    }
}

class Factura{
    constructor(nombre, nif){
        this.nombre = nombre;
        this.nif = nif;
        this.lineas = [];
        //this.impuesto = 0;
    }
    add (concepto, precio, cantidad){
        const pedido = new Pedido (concepto, precio, cantidad);
        this.lineas.push (pedido);
    }
    totalFactura(impuesto){
        //this.impuesto = impuesto;
        return (this.lineas.map((x)=>x.totalPedido()).reduce((x,y)=>x+y)*impuesto/100);
    }
    imprimirFactura(impuesto){
        console.log("La factura del cliente",this.nombre,"es:");

        this.lineas.forEach((item)=>console.log("Del producto",item.concepto,"hay",item.cantidad,
        "unidades.Haciendo un total de",item.totalPedido()));

        console.log("La factura total con un impuesto del",impuesto, "% es de",this.totalFactura(impuesto));

        // for(let item of this.lineas){
        //     console.log("Del producto",item.concepto,"hay",item.cantidad,"a",item.precio,
        //     "la unidad. Haciendo un total de",item.totalPedido());
        // }
        
    }
}
class FacturaDolares extends Factura{ //ESTO NO FUNCIONA BIEN, FALLA EL TOTAL DE LAS LINEAS QUE NO ESTA EN $
    totalFactura(impuesto){
       return super.totalFactura(impuesto)*1.11;
    }
}

let fact = new Factura("Jesus En Euros", "78787878-K");
let factDolar = new FacturaDolares("Ramón En Dólares", "76767676-J");

fact.add("Ladrillo", 5.50, 200);
fact.add("Cemento", 7.80, 100);
fact.add("Atleti", 800, 1);

factDolar.add("Vaquilla", 5.50, 200);
factDolar.add("VillaArriba", 7.80, 100);
factDolar.add("VillaAbajo", 800, 1);

fact.imprimirFactura(21);

factDolar.imprimirFactura(21);


