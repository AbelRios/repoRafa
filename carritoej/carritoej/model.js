import { Configuration } from "../configuration.js";
/**
 * @class Representa los items del carrito
 */
class ItemCart {
    constructor(product, units) {
        this.product = product;
        this.units = units;
    }
    getAmount() {
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
    }
    searchProduct(product) {
    }
    searchProductById(id) {
    }
    existProduct(product) {
    }
    getList() {
        return this.list;
    }
    static factory() {
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
    add(id,units=1) {
        return this;
    }
    /**
     * Busca el produucto en el catálogo. Si lo encuentra, busca su posición en el carrito.
     * Si la encuentra borra el itemcart
     * @param {*} id del producto 
     * @returns this. el carrito
     */
    delete(id) {
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
    }
    /**
     * Calcula el total de elementos del carrito
     * @returns total
     */
    getTotal() {
    }
    /**
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
    constructor() {
        this.cart = new Cart(Catalog.factory());
        this.cart.loadItems(JSON.parse(localStorage.getItem(Configuration.LS_NAME)) || []);
    }
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
    }

    _commit() {
        this.onModelChanged(this);
        localStorage.setItem(Configuration.LS_NAME, JSON.stringify(this.cart.getItems()));
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
