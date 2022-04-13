console.clear();

function Producto (codigo, descripcion, precio){
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
}

function Pedido (producto, cantidad){
    this.producto = producto;
    this.cantidad = cantidad;
}

function Catalogo(){
    this.productos = [];

    this.add = function (prod) {
        if (!this.productos.some((item)=>item.codigo===prod.codigo)){  
            this.productos.push(prod);
        } 
    }

    this.search = function (codeOrDescription){
        return this.productos.filter ((item) => item.codigo === codeOrDescription || item.descripcion.includes(codeOrDescription));
    }

    this.delete = function (code){
        let i = this.productos.findIndex((item)=>item.codigo===code);
        this.productos.splice(i,1);
    }

    this.list = function() {
        for (let i = 0, max=this.productos.length; i<max; i++){
            console.log(this.productos[i]);
        }
    }
}

function Carrito (catalogo){
    this.catalogo = catalogo;
    this.listaPedidos = [];

    this.empty = function() {
        this.listaPedidos = [];
    }

    this.add = function (codigo, cantidad) {

    }
}