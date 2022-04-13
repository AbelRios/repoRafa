/**
 * @class Controller
 *
 * Recibe las interacciones del usuario y coordina las acciones entre vista y modelo
 *
 * @param model: modelo de datos
 * @param view: vista a mostrar
 */
export default class ControllerCart {
    constructor(model, view) {
        this.model = model
        this.view = view
        // Enlazar el callback de refresco de actualizaciones del modelo
        this.model.bindModelChanged(this.onModelChanged);
        // Enlazar las acciones del usuario con funciones 
        this.view.bindAdd(this.handleAdd);  //oye vista, cuando pulsen añadir esta es la función que tienes que usar
        this.view.bindDelete(this.handleDelete); // oye vista, cuando pulsen borrar, esta es la función
        this.view.bindEmpty(this.handleEmpty);  // oye vista, lo mismo eh

        // Mostar el catálogo
        this.view.displayCatalog(this.model);
        // Mostrar el contenido del carrito
        this.view.displayCart(this.model.cart);
    }

    onModelChanged = model => {
        this.view.displayCart(model.cart);
    }

    // onModelChanged = function (model) {      misma función que arriba, distinta forma de definirla
    //     this.view.displayCart(model.cart);
    // }

    handleAdd = id => {
        this.model.add(id);
    }

    handleDelete = id => {
        this.model.delete(id);
    }

    handleEmpty = () => {
        this.model.empty();
    }
}

