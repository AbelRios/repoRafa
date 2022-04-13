console.clear();

class Producto{
    constructor(codigo, descripcion, precio){
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.precio=precio;
    }
}

class Pedido{
    constructor (producto, cantidad){
        this.producto=producto;
        this.cantidad=cantidad;
    }
    totalPedido(){
        return this.producto.precio*this.cantidad;
    }
}

class Catalogo{
    constructor(){
        this.listaProductos=[];
    }
    searchCatalogo(code){ // Devuelve el objeto del catálogo que tiene ese código 
        return this.listaProductos.find ((item) => item.codigo === code);
    }
    add (prod){
        if (this.searchCatalogo(prod.codigo) === undefined){  
            this.listaProductos.push(prod);
        } 
    }
    delete(code){
        let i = this.listaProductos.find(code);
        if(i >= 0){
            this.listaProductos.splice(i,1);
        }
    }
    list (){
        for(let item of this.listaProductos){
            console.log(item);
        }
    }
    static crear(){ // Usamos el static porque la función es una función factoría, que no necesita de un objeto para ejecutarse
        const result = new Catalogo();
        result.add(new Producto("codigo1","producto1",2.0));
        result.add(new Producto("codigo2","producto2",3.0));
        return result;
    }
}

class Carrito {
    constructor(catalogo){
        this.catalogo=catalogo;
        this.listaPedidos=[];
    }
    searchCarrito(codigo){  // Nos devuelve el índice de nuestra listaPedidos donde está, y -1 si no está 
        return this.listaPedidos.findIndex ((item) => item.codigo === codigo);
    }
    empty() {
        this.listaPedidos = [];
    }
    add(codigo, cantidad){ 
        let i = this.searchCarrito(codigo);
        if(i >= 0){ // El producto ya está en el Carrito
            this.listaPedidos[i].cantidad += cantidad;
        } else { // El producto no está en el Carrito
            //const pedido = new Pedido (this.catalogo.searchCatalogo(codigo), cantidad);
            this.listaPedidos.push(new Pedido(this.catalogo.searchCatalogo(codigo), cantidad));
        }
    }
    delete(codigo){
        let i = this.searchCarrito(codigo);
        if (i >= 0){
            this.listaPedidos.splice(i,1);
        }
    }
    update(codigo,cantidad){
        let i = this.searchCarrito(codigo);
        if (i >= 0){ // Comprobamos que el codigo introducido está en el carrito
            this.listaPedidos[i].cantidad = cantidad;
        }
    }
    up (codigo){
        let i = this.searchCarrito(codigo);
        if (i >= 0){ // Comprobamos que el codigo introducido está en el carrito
            this.listaPedidos[i].cantidad++;
        }
    }
    down (codigo){
        let i = this.searchCarrito(codigo);
        if (i >= 0){ // Comprobamos que el codigo introducido está en el carrito
            this.listaPedidos[i].cantidad--;
        }
        if(this.listaPedidos[i].cantidad === 0){ 
            this.delete(codigo);
        }
    }
    items (){
        return this.listaPedidos.length();
    }
    total (){
        let suma = 0;
        for(let item of this.listaPedidos){
            suma += item.producto.precio * item.cantidad;
        }
        return suma;
    }
    list (){
        for (let item of this.listaPedidos){
            console.log(this.listaPedidos[item], "Importe:", this.listaPedidos[item].totalPedido());
        }
        console.log("Total del Carrito:", this.total);
    }
}
const carrito = new Carrito(Catalogo.crear());

carrito.add("codigo1",10);
carrito.add("codigo1",2);

console.log(carrito.total());

carrito.add("codigo2",2);

console.log(carrito.total());

carrito.delete("codigo2");

console.log(carrito.total());

carrito.up("codigo1");

console.log(carrito.total());

carrito.down("codigo1");

console.log(carrito.total());

carrito.update("codigo1",1);

console.log(carrito.total());

carrito.down("codigo1");

console.log(carrito.total());
console.log(carrito.items());
