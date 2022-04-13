document.addEventListener ('DOMContentLoaded', evento => initialize(evento));

function initialize (evento) {
    document.getElementById('numero1').addEventListener("click",event=>vaciar(event));
    document.getElementById('numero2').addEventListener("click",event=>vaciar(event));
    document.getElementById('calcular').addEventListener("click",calcular);
}

function vaciar() {
    document.getElementById(event.target.id).value="";
}

function calcular() {
    const num1 = parseInt(document.getElementById('numero1').value);
    const num2 = parseInt(document.getElementById('numero2').value);
    const op = parseInt(document.getElementById('operacion').value);
    document.getElementById("out").innerHTML = `El resultado es: ${operacion(op,num1,num2)}`;
}
function operacion(op,num1,num2){
    switch(op){          
        case 1: {              
            return num1+num2;
        }
        case 2:{
            return num1-num2;
        }
        case 3:{
            return num1*num2;
        }
        case 4:{
            return num1/num2;
        }
        case 5:{
            return num1%num2;
        }
    }
}