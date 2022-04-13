  
import ControllerCart from "./controllercart.js";
import ModelCart from "./model.js";
import ViewCart from "./view.js";
  
(function() {
    const app = new ControllerCart(new ModelCart(), new ViewCart())
}
)();