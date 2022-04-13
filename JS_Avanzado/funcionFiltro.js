function filter(array, callback) {
    const result = [];
    for (let i = 0, max = array.length; i < max; i++) {
        if (callback(array[i], i, array)) { //Aunque le pasamos tres parametros, si nuestra función callback solo usa uno
            result.push(array[i]);         // po yasta, usa el primero y punto, cero drama
        }
    }
    return result;
}

function callback(item) {
    return (item > 5);
}
// Esta es simplemente un ejemplo de lo que puede ser el callback
// el callback puede ser cualquier condición que nosotros queramos

const miArray = [1, 9, 5, 2, 8];
const filtro = filter(miArray, callback);

console.log(filtro);


// Versión 2 Profesor incluyendo estos nuevos métodos en la clase Array

Array.prototype.filtro = function (callback) {
    const result = [];
    for (let i = 0, max = this.length; i < max; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

Array.prototype.encuentraIndice = function (callback) {
    for (let i = 0, max = this.length; i < max; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
}

function callback(item) {
    return (item > 'i');
}

const miarray = ['a', 'b', 'x', 'x', 'm', 'h'];
console.log(miarray.filtro(callback));
console.log(miarray.filtro(function (item) {
    return item > 'i';
}));
console.log(miarray.filtro(item => item > 'i'));