/* 40.Ejercicio (difícil)
Generar un array de 20 elementos con números aleatorios no repetidos entre sí */
console.clear();
const MAX_ITEMS = 20;
{
    // oculto numbers en un bloque para que no sea global y 
    // no sea accesible desde las funciones getRandomValue e include
    // bucle para generar un array de MAX_ITEMS elementos 
    const numbers = [];
    for (let i = 0; i < MAX_ITEMS; i++) {
        numbers[i] = getRandomValue(numbers);
    }
    console.log (numbers);
}
​
// función que me genera un número aleatorio entre 1 y MAX_ITEMS que no 
// haya incluido todavía en el array
function getRandomValue(array) {
    let value;
    do {
        value = Math.floor(Math.random()*MAX_ITEMS)+1;
    } while (include(array,value))
    return value;
}
​
// Existe el método Array.includes(item) que nos devuelve true/false si el item existe 
// en el array, pero indiqué en clase que era conveniente que lo codificárais vosotros.
function include(array,value) {
    for (const item of array) {
        if (value===item)
            return true;
    }
    return false;
}