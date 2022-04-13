  
import ControllerCart from "./controllercart.js";
import ModelCart from "./model.js";
import ViewCart from "./view.js";
  
(function() {
    const app = new ControllerCart(new ModelCart(), new ViewCart())
}
)(); // Al poner otro par de () después del cerrar la función, hace que se ejecute automáticamente (IIFE)