
document.addEventListener ('DOMContentLoaded', evento => initialize(evento));

let ancla;

function initialize (evento) {
    document.getElementById('calcular').addEventListener("click",calcular);
    document.getElementById('numero').addEventListener("click",vaciar);
    ancla = document.getElementById('out');
}

function vaciar() {
  document.getElementById('numero').value = "";
  //ancla.textContent="";
}

function calcular() {
  const num = document.getElementById('numero').value;
//document.getElementById("out").innerHTML = `El factorial de ${num} es ${factorial(num)}`;
// if (ancla.hasChildNodes()){
//   ancla.textContent="";
// }
  ancla.textContent="";
  const nodo = document.createElement('p');
  nodo.textContent = `El factorial de ${num} es ${factorial(num)}`;
  ancla.appendChild (nodo);
}

function factorial(numero) {
  
  return numero !== 1 ? numero * factorial(numero - 1) : 1;
}

