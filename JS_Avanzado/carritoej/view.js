import { Configuration } from "../configuration.js";

/**
   * @class View Clase padre de vistas con métodos comunes
   *
   */
// class View { Versión antigua del profesor
//   createElement(tag, class1, class2, class3) { // Intentar hacerlo con un array en lugar de las 3 clases
//     const element = document.createElement(tag) // tag es la etiqueta (div,h1,h2... lo que sea)
//     if (class1) {
//       element.classList.add(class1)
//     }
//     if (class2) {
//       element.classList.add(class2)
//     }
//     if (class3) {
//       element.classList.add(class3)
//     }
//     return element
//   }

class View { //modificación ***
  createElement(tag, clases) {
    const element = document.createElement(tag);
    if (clases instanceof Array) { // instanceof chequea que clase sea tipo Array
      for (let item of clases) {
        element.classList.add(item);
      }
    } else {
      element.classList.add(clases);
    }
    return element;
  }

  getElement(selector) { // Busca en el DOM un selector que se llame así
    return document.querySelector(selector); //querySelector devuelve siempre un ARRAY
  }
}
/**
   * @class ViewCart se encarga de mostrar el modelo en el DOM
   *
   */
export default class ViewCart extends View { // Podríamos usar un document privado (una clase document que nosotros 
                                             // creáramos, hija de la clase document (mockear la clase document)) 
                                             // para testear la Vista y habría que 
                                             // pasarle ese document privado en el constructor 
  constructor() {
    super();
    // Aquí leemos las anclas que hemos creado en el archivo de configuracion y nos las traemos a la vista
    // de tal forma que en las variables que creamos tenemos un puntero que apunta al objeto del html que 
    // queremos usar/modificar
    this.DOMCart = this.getElement(Configuration.ID_CART);
    this.DOMCatalog = this.getElement(Configuration.ID_CATALOG);
    this.DOMEmpty = this.getElement(Configuration.ID_EMPTY);
    this.DOMTotal = this.getElement(Configuration.ID_TOTAL);
  }
  /**
   * Muestra el catálogo. Por cada producto llama al método interno que muestra el producto
   * @param {*} model: modelo de datos que contiene el catálogo
   */
  displayCatalog(model) { // Esto va a ser un bucle que vaya creando las distintas cosas de la vista
    model.cart.catalog.forEach((item) => this._createProduct(item));
  }
  /**
   * Muestra un producto
   * @param {} product: producto a mostrar
   */
  _createProduct(product) {
    const node = this.createElement('div', ['card', 'col-sm-4']); //Por la modificación de arriba en la clase View ***
    // Body                                                         aplicar a los otros  
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
    const nodeButton = this.createElement('button', ['btn', 'btn-primary']);
    nodeButton.textContent = '+';
    nodeButton.dataset.item = product.id; //metemos el código del producto en el dataset del nodo
    nodeButton.addEventListener('click', event => {
      this.addHandler(event.target.dataset.item); //aquí tenemos el evento del click del botón y lo asociamos
                                                  // a la función add(Handler) que necesita el item
    });
    // Insertamos
    nodeCardBody.appendChild(nodeImage); // crea imagen
    nodeCardBody.appendChild(nodeTitle); // crea titulo
    nodeCardBody.appendChild(nodePrice); // crea precio
    nodeCardBody.appendChild(nodeButton); //crea boton
    node.appendChild(nodeCardBody);   //crea el nodo Card con los nodos internos de antes
    this.DOMCatalog.appendChild(node); //DOMCatalog es el ancla en el configuration, le pasamos el nodo 
  }
  /**
   * Muestra el carrito 
   * @param {} cart: carrito
   */
  displayCart(cart) {
    // Vaciamos todo el html
    this.DOMCart.textContent = ''; // Aquí borra el carro y luego lo vuelve a pintar entero 
    cart.getItems().forEach(item => this._createItem(item)); //por cada elemento del modelo creamos un elemento
    this.DOMTotal.textContent = cart.getTotal();             //en la vista 
  }
  /**
   * Muestra un item del carrito
   * @param {} item: producto y cantidad
   */
  _createItem(item) {
    const node = this.createElement('li','list-group-item'); //Aqio creamos el 'li'
    node.textContent = `${item.units} x ${item.product.name} = ${item.getAmount()}`;
    const nodeButton = this.createElement('button',['btn','btn-danger']);
    nodeButton.textContent = "X";
    nodeButton.dataset.item = item.product.id; //asociamos el id del item al botón(lo guardamos en el dataset.item del nodebutton)
    node.appendChild(nodeButton);
    this.DOMCart.appendChild(node);            // porque el delete está asociado de por si 
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
    this.DOMCart.addEventListener('click', event => { // aquí añade al carrito (<ul>)
      if (event.target.className.startsWith('btn')) { // si la clase del evento empieza con 'btn' entramos al if
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
