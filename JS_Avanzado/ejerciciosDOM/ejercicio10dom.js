document.addEventListener ('DOMContentLoaded', evento => initialize(evento));

function initialize (evento) {
    document.getElementById('calcular').addEventListener("click",calcular);
}

function calcular() {
    const sueldo = parseInt(document.getElementById('sueldo').value);
    const categoria = parseInt(document.getElementById('categoria').value);
    document.getElementById("out").innerHTML = `El nuevo salario es: ${nuevoSalario(sueldo,categoria)}`;
}

function nuevoSalario(sueldo,categoria){
    let incremento = 0;  
    switch(categoria){          
        case 1: {              
            incremento=1.15;    
        break;
        }
        case 2:{
            incremento=1.1;
        break;
        }
        case 3:{
            incremento=1.06;
        break;
        }
        case 4:{
            incremento=1.03;
        break;
        }
    }
    return (sueldo*incremento);
}