/*Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y
100.*/

console.clear();

for (let i=1; i<=100; i++){
    if(i % 2 === 0){
        console.log ( i + " es múltiplo de 2");
    }
    if(i % 3 === 0){
        console.log( i + " es múltiplo de 3");
    }
}

// cuenta_par += (number % 2 === 0) ? 1:0 ;
// esta expresión hace un 'if' (operador condicional)
// si el resto del número entre dos es cero entonces a cuenta_par suma uno, si no entonces suma 0

