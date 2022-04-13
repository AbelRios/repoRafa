import { Configuration } from "../configuration.js";

/**
   * @class View Clase padre de vistas con métodos comunes
   *
   */
 class View {
    createElement(tag, class1, class2, class3) {
      const element = document.createElement(tag)
      if (class1) {
        element.classList.add(class1)
      }
      if (class2) {
        element.classList.add(class2)
      }
      if (class3) {
        element.classList.add(class3)
      }
      return element
    }
  
    getElement(selector) {
      return document.querySelector(selector);
    }
 }
/**
   * @class ViewCart se encarga de mostrar el modelo en el DOM
   *
   */
export default class ViewCart extends View {
  constructor() {
    super();
    this.DOMCart = this.getElement(Configuration.ID_CART);
    this.DOMCatalog = this.getElement(Configuration.ID_CATALOG);
    this.DOMEmpty = this.getElement(Configuration.ID_EMPTY);
    this.DOMTotal = this.getElement(Configuration.ID_TOTAL);
  }
  /**
   * Muestra el catálogo. Por cada producto llama al método interno que muestra el producto
   * @param {*} model: modelo de datos que contiene el catálogo
   */
  displayCatalog(model) {
    
  }
  /**
   * Muestra un producto
   * @param {} product: producto a mostrar
   */
  _createProduct(product) {
    const node = this.createElement('div', 'card', 'col-sm-4');
    // Body
    const nodeCardBody = this.createElement('div', 'card-body');
    // Titulo
    const nodeTitle = this.createElement('h5', 'card-title');
    nodeTitle.textContent = product.name;
    // Imagen
    const nodeImage = this.createElement('img', 'img-fluid');
    nodeImage.setAttribute('src', product.image);
    // Precio
    const nodePrice = this.createElement('p', 'card-text');
    nodePrice.textContent = `${product.price} €`;
    // Botón
    const nodeButton = this.createElement('button', 'btn', 'btn-primary');
    nodeButton.textContent = '+';
    nodeButton.dataset.item = product.id;
    nodeButton.addEventListener('click', event => {
      this.addHandler (event.target.dataset.item);
    });
    // Insertamos
    nodeCardBody.appendChild(nodeImage);
    nodeCardBody.appendChild(nodeTitle);
    nodeCardBody.appendChild(nodePrice);
    nodeCardBody.appendChild(nodeButton);
    node.appendChild(nodeCardBody);
    this.DOMCatalog.appendChild(node);
  }
  /**
   * Muestra el carrito 
   * @param {} model: modelo de datos con el catálogo
   */
  displayCart(model) {
    // Vaciamos todo el html
    this.DOMCart.textContent = '';
    model.cart.getItems().forEach(item => this._createItem(item));
    this.DOMTotal.textContent = model.cart.getTotal();
  }
  /**
   * Muestra un item del carrito
   * @param {} item: producto y cantidad
   */
  _createItem(item) {
  }
  /**
   * Guarda el manejador para añadir un nuevo artículo al carrito
   * @param {*} handler 
   */
  bindAdd(handler) {
    this.addHandler = handler
  }
  /**
   * Ejecuta el manejador de borrar un artículo del carrito
   * @param {} handler: método que borra un artículo. Se usa el código del artículo guardado 
   */
  bindDelete(handler) {
    this.DOMCart.addEventListener('click', event => {
      if (event.target.className.startsWith('btn')) {
        const id = parseInt(event.target.dataset.item)
        handler(id)
      }
    })
  }
  /**
   * Ejecuta el manejador que borra la papelera
   * @param {} handler 
   */
  bindEmpty(handler) {
    this.DOMEmpty.addEventListener('click', event => {
        handler();
    })
  }
}
