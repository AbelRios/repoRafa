/* Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se calcula según
el siguiente criterio: la parte práctica vale el 10%; la parte de problemas vale el 50% y la parte
teórica el 40%. El algoritmo leerá el nombre del alumno, las tres notas, escribirá el resultado y
volverá a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía. Las
notas deben estar entre 0 y 10, si no lo están, no imprimirá las notas, mostrará un mensaje de error
y volverá a pedir otro alumno. */

console.clear();

const prompt = require("prompt-sync")();

// Con funciones haríamos simplemente un 'do-while' de mientras el nombre es distinto al espacio en blanco
// y haríamos una función para calcular la nota (que pediría las notas y haría la media)

let nombre;
do{
    nombre=prompt("Introduce nombre: ");
    if(nombre!== " "){
        calcula_notas(nombre);
    }
} while (nombre !== " ");

function calcula_notas (alumno) {
    let notaPractica = pedir_nota ("practica", 10);
    let notaTeorica = pedir_nota ("teorica", 40);
    let notaProblemas = pedir_nota ("problemas", 50);
    console.log (`La nota de ${alumno} es ${notaPractica+notaTeorica+notaProblemas}`)
}

/* Aquí es como sería la función si hubiesemos hecho dos arrays definidos al principio del programa principal:
    notas [practica, teorica, problemas];
    pesos [10,40,50];

 function calcula_notas (alumno) {
    let nota = 0;
    const max=notas.length;
    for (let i=0; i<max;i++){
        nota += pedir_nota(notas[i],pesos[i]);
    }
    console.log (`La nota de ${alumno} es ${nota}`)
} */

function pedir_nota (nota,porcentaje) {
    let valor = Number(prompt(`Introduce la nota de ${nota}: `))
    return valor * porcentaje / 100;
}

/*
let alumno = prompt("Introduzca nombre del alumno: ");

while(alumno!==" "){
    let practica = prompt("Introduzca nota de la parte práctica: ");
    let problemas = prompt("Introduzca nota de los problemas: ");
    let teorica = prompt("Introduzca nota de la parte teórica: ");
    if((practica<0)||(practica>10)||(problemas<0)||(problemas>10)||(teorica<0)||(teorica>10)){
        console.log("Valor de las notas No Válido");
    } else {
        let nota = ((practica*0.1)+(problemas*0.5)+(teorica*0.4));
        console.log("La nota del alumno "+ alumno + " es: "+ nota);
    }
    alumno = prompt("Introduzca nombre del alumno: ");
}
*/