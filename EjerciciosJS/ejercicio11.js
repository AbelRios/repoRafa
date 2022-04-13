// En una tienda efectúan un descuento a los clientes dependiendo de la cantidad de la compra. El
// descuento se basa en:

// Si el monto es menor que 500€ -> No hay descuento
// Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
// Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
// Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
// Más de 15.000€ -> 25% descuento
// Imprimir (Escribir) el precio final.

// Se podría hacer con un switch de rangos (buscar en stack overflow como usar range in switch)

console.clear();

const prompt = require("prompt-sync")();

const precio = Number(prompt("Cuál es el precio a pagar?: "));  //Mejor un const (no vamos a modificar el precio)
let descuento = 0;                                              // y el const es mejor a la hora de computar

if(isNaN(precio) || (precio<0)){
    console.log("El precio debe ser un valor numérico y positivo.");
} else {
    switch(true){ //Ponemos TRUE para que entre siempre al switch
        case ((precio>500) && (precio<=1000)):
            descuento=0.05;
            break;
        case ((precio>1000) && (precio<=7000)):
            descuento=0.1;
            break;
        case ((precio>7000) && (precio<=15000)):
            descuento=0.2;
            break;
        case (precio>15000):
            descuento=0.25;
            break;
    }
    console.log("Su descuento es del " + (descuento*100) + " %. El precio a pagar es de: " + (precio-(precio*descuento)) + " euros.");
}

//  Aquí hacemos solución de 'if' anidados:

/* if(isNaN(precio)){   
    console.log("El precio debe ser un valor numérico.");
} else {
    if((precio>=500)&&(precio<=1000)) {
        descuento=0.05;
    } else if ((precio>1000)&&(precio<=7000)){
        descuento=0.1;
    } else if ((precio>7000)&&(precio<=15000)){
        descuento=0.2;
    } else if (precio>15000){
        descuento=0.25;
    }
    console.log("Su descuento es del " + (descuento*100) + " %. El nuevo precio a pagar es: " + (precio-(precio*descuento)));
} */

