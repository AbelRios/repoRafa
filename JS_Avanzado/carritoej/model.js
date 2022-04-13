import { Configuration } from "../configuration.js"; //Usamos las llaves porque la clase de configuracion no 
                                                     // tiene el export default
/**
 * @class Representa los items del carrito
 */
class ItemCart {
    constructor(product, units) {
        this.product = product;
        this.units = units;
    }
    getAmount() {
        return this.product.price*this.units;
    }
}
/**
 * @class Representa los productos del catálogo
 */
class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
/**
 * @class Representa el catálogo de productos
 */
class Catalog {
    constructor() {
        this.list = [];
    }
    add(product) {
        if(!this.existProduct(product)){
            this.list.push(product);
        }
    }
    searchProduct(product) { //Devuelve un array de productos donde coincide el id y el nombre
        return this.list.filter((item)=>item.id==product.id || item.name==product.name); 
    }
    searchProductById(id) { //Devuelve un puntero al objeto con ese id
        return this.list.find((item) => item.id == id);
    }
    existProduct(product) {
        return this.list.some((item) => item.id == product.id);
    }
    getList() {
        return this.list;
    }
    static factory() { //Método estático se ejecuta sin la necesidad de un objeto (sólo necesita la clase)
        const result = new Catalog();
        result.add(new Product(1, "patatas", 2.5, "https://source.unsplash.com/random/500x500/?potato&sig=1"));
        result.add(new Product(2, "cebollas", 2.3, "https://source.unsplash.com/random/500x500/?onion&sig=2"));
        result.add(new Product(3, "calabacín", 1.9, "https://source.unsplash.com/random/500x500/?zucchini&sig=3"));
        result.add(new Product(4, "fresas", 4.3, "https://source.unsplash.com/random/500x500/?burrs&sig=4"));
        return result;
    }
}
/**
 * @class Representa el carrito de la compra
 *
 */
class Cart {
    constructor(catalog) {
        this.catalog = catalog;
        this.empty();
    }
    /**
     * Busca el producto por id en el catálogo. Si lo encuentra busca el itemcart en el carrito por producto
     * Si lo encuentra le añade una unidad. Si no crea un nuevo itemcart
     * @param {*} id del producto
     * @returns this. el carrito 
     */
    add(id,units=1) { //Si pasamos un valor de units toma ese valor, si no toma el valor 1
        const product = this.catalog.searchProductById(id);
        if(product){
            const item = this.searchItem(product);
            if(item){
                item.units++;
            } else {
                this.cart.push(new ItemCart(product,units));
            }
        }
        return this;  //Interaz fluida, que nos devuelve el propio objeto
    }
    /**
     * Busca el produucto en el catálogo. Si lo encuentra, busca su posición en el carrito.
     * Si la encuentra borra el itemcart
     * @param {*} id del producto 
     * @returns this. el carrito
     */
    delete(id) {
        const product = this.catalog.searchProductById(id);
        if (product){
            const position = this.cart.findIndex((item) => item.product.id == id);
            if(position >= 0){
                this.cart.splice(position,1);
            }
        }
        return this;
    }
    /**
     * Borra todos los items del carrito
     * @returns this. el carrito
     */
    empty() {
        this.cart = [];
        return this;
    }
    /**
     * Busca en el array de itemcart si existe alguno donde el producto sea el indicado
     * @param {*} objeto producto. 
     * @returns el itemcart del producto o undefined
     */
    searchItem(product) {
        return this.cart.find((item) => item.product.id == product.id);
    }
    /**
     * Calcula el total de elementos del carrito
     * @returns total
     */
    getTotal() {
        return this.cart.reduce((total,item) => total + item.getAmount(),0);
    }
    /**
     * Este metodo loadItems es para cuando hace el parse del string del local storage (cierra pagina y vuelve a abrirla)
     * y ese array que nos da el parse está lleno de objetos, pero que no tienen clase definida
     * de esta manera los transformamos en ItemCarts y lo metemos en el nuevo carrito creado
     * 
    * Carga una array de itemcart en el carrito
    * @param {*} array 
    */
    loadItems(array) {
        this.empty();
        array.forEach (item=>this.add(item.product.id,item.units));
    }
    /**
     * Devuelve el array con el contenido del carrito
     * @returns array de itemcart
     */
    getItems() {
        return this.cart;
    }
    /**
     * Devuelve la longitud del array
     * @returns longitud del array
     */
    getNumItems() {
        return this.cart.length;
    }
}

/**
 * @class Representa el modelo de datos
 *
 */
export default class ModelCart {
    constructor(catalog) {
        this.cart = new Cart(catalog || Catalog.factory()); // crea un carrito con un catalogo que nos pasen por parámetro
                                                            // o crea uno por defecto (factory) si no nos pasan ninguno
                                                            // Esto se llama CORTOCIRCUITO
        this.cart.loadItems(JSON.parse(localStorage.getItem(Configuration.LS_NAME)) || []);
        // Esta función carga el JSON y lo parsea (que lo guardamos mas abajo) por si hemos cerrado el navegador
        // con el carrito cargado de algo
    }

    // Los métodos add, delete y empty son los únicos métodos que la vista (view) va a necesitar usar
    add(id) {
        this.cart.add(id);
        this._commit();
    }
    delete(id) {
        this.cart.delete(id);
        this._commit();
    }
    empty() {
        this.cart.empty();
        this._commit();
    }

    bindModelChanged(callback) {
        this.onModelChanged = callback;
        //  este es el interruptor que usamos para decir (a la vista/controlador) que el Modelo ha cambiado
    }

    _commit() {  //El guión bajo es para indicar que es un método privado
        this.onModelChanged(this); // al hacer el commit le pasamos al controlador this (el propio modelo)
        localStorage.setItem(Configuration.LS_NAME, JSON.stringify(this.cart.getItems()));
        // Esta funcion guarda un JSON en el navegador con lo que tenemos en el carrito para cargarlo
        // cuando volvamos a abrir el navegador
    }

}

// function testCart() {
//     const carrito = new Cart(Catalog.factory);
//     carrito.add(1);
//     carrito.add(1);
//     console.assert(carrito.getItems().length === 1,'No se ha añadido el segundo código 1');
//     carrito.add(2);
//     console.assert(carrito.getItems().length === 2,'No se ha añadido el código 2');
//     carrito.delete(1);
//     console.assert(carrito.getItems().length === 1,'No se ha borrado el código 1');
//     carrito.empty();
//     console.assert(carrito.getItems().length === 0,'No se ha vaciado el carrito');

// }

// testCart();
