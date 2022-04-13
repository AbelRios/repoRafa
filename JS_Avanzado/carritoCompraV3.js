console.clear();

class Producto {
    constructor(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class Pedido {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    totalPedido() {
        return this.producto.precio * this.cantidad;
    }
    list(){
        console.log("Codigo:",this.producto.codigo,", Descripcion:",this.producto.descripcion,", Precio:",
        this.producto.precio,"€/ud, Importe:", this.totalPedido(),"Euros.");
    }
}

class Catalogo {
    constructor() {
        this.listaProductos = [];
    }

    searchCatalogo(code) {
        // Devuelve el producto del catálogo que tiene ese código
        // o undefinded si no existe en el catálogo 
        return this.listaProductos.find((item) => item.codigo === code);
    }

    add(prod) {
        if (!this.searchCatalogo(prod.codigo)) {
            this.listaProductos.push(prod);
        }
    }

    static crear() {
        // Usamos el static porque la función es una función factoría, 
        //que no necesita de un objeto para ejecutarse
        const result = new Catalogo();
        result.add(new Producto("codigo1", "producto1", 2.0));
        result.add(new Producto("codigo2", "producto2", 3.0));
        return result;
    }
}

class Carrito {
    constructor(catalogo) {
        this.catalogo = catalogo;
        this.listaPedidos = [];
    }

    searchCarrito(code) {
        // Nos devuelve el Pedido dentro del carrito con ese codigo
        // o undefinded si no existe ese codigo en el carrito
        return this.listaPedidos.find((item) => item.producto.codigo === code);
    }

    searchIndex(code){  
        // Nos devuelve el índice de nuestra listaPedidos donde está 
        // el pedido con ese código, y -1 si no está 
        return this.listaPedidos.findIndex ((item) => item.producto.codigo === code);
    }

    empty() {
        this.listaPedidos = [];
    }

    add(code, unidades) {
        if (this.catalogo.searchCatalogo(code)) {// El producto a añadir está en el Catalogo
            let i = this.searchCarrito(code);
            if (!i) { //El producto no está en el carrito

                this.listaPedidos.push(new Pedido(this.catalogo.searchCatalogo(code), unidades));

            } else { // El producto ya está en el carrito (sólo modificaremos su cantidad)

                i.cantidad += unidades;
            }
        } else {
            console.log ("El codigo no esta en el catalogo");
        }
    }

    delete(code){
        let i = this.searchIndex(code);
        if (i >= 0){
            this.listaPedidos.splice(i,1);
        }
    }

    update(code,units){
        let i = this.searchCarrito(code);
        if (i){ // Comprobamos que el codigo introducido está en el carrito
            i.cantidad = units;
        }
    }

    up(code){
        let i = this.searchCarrito(code);
        if (i){ // Comprobamos que el codigo introducido está en el carrito
            i.cantidad++;
        }
    }

    down(code){
        let i = this.searchCarrito(code);
        if (i){ // Comprobamos que el codigo introducido está en el carrito
            i.cantidad--;
        }
        if (i.cantidad === 0){
            this.delete(code);
        }
    }

    items (){ 
        return this.listaPedidos.length;
    }

    total (){
        let suma = 0;
        for(let item of this.listaPedidos){
            suma += item.totalPedido();
        }
        return suma;
    }

    list (){
        console.log("Carrito:");
        for (let item of this.listaPedidos){
            item.list();
        }
        console.log("Total del Carrito:", this.total(),"Euros.");
    }
}


const carrito = new Carrito(Catalogo.crear());


carrito.add("codigo1",10);
carrito.add("codigo1",2);
console.log(carrito.total());
carrito.add("codigo2",2);
console.log(carrito);
carrito.list();
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