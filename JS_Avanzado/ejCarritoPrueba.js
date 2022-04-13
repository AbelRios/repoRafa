console.clear();

function Producto (codigo, descripcion, precio){
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
}

function Catalogo (){
    this.productos = [];

    this.add = function (prod) {
        if (!this.productos.some((item)=>item.codigo===prod.codigo)){  
            this.productos.push(prod);
        } 
    }

    this.search = function (codeOrDescription){
        return this.productos.filter ((item) => item.codigo === codeOrDescription || item.descripcion.includes(codeOrDescription));
       
        // for(let i=0, max=this.productos.length; i<max; i++){
        //     if(this.productos[i].codigo===code){
        //         return this.productos[i];
        //     }
        // }
    }

    this.delete = function (code){
        let i = this.productos.findIndex((item)=>item.codigo===code);
        this.productos.splice(i,1);
        
        // for(let i=0, max=this.productos.length; i<max; i++){
        //     if(this.productos[i].codigo===code){
        //         this.productos.splice(i,1);
        //     }
        // }
    }

    this.list = function() {
        for (let i = 0, max=this.productos.length; i<max; i++){
            console.log(this.productos[i]);
        }
    }
}

// Assert
// console.assert(condicion, mensaje)
// console.assert(catalogo.size===1, "Fallo al añadir")
// Esto hace que si la condición se cumple no hace nada
// pero si la condición NO se cumple, te da un mensaje de error
   
let pera = new Producto(1, "pera", 1.4);
let manzana = new Producto(2, "manzana 1", 2.0);
let platano = new Producto(3, "platano", 3.4);

let cat = new Catalogo();

cat.add(pera);
cat.add(manzana);
cat.add(platano);

cat.list();

console.log(cat.search(6));

cat.delete(2);

cat.list();
