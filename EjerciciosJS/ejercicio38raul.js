const normal = [1, 2, 3, 4, 5];
let invertido = [];
for (let i=normal.length-1, j=0; i>=0; i--, j++) { //No es necesario tener la J, se puede hacer diferente
    invertido [j] = normal [i];
}
console.log(invertido)