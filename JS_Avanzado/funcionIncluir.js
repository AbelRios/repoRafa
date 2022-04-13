Array.prototype.incluir = function (elemento, igual) {
    for (let i = 0, max = this.length; i < max; i++) {
        if (igual(elemento, this[i])) {
            return true;
        }
    }
    return false;
}

function igual(x, y) {
    return x.codigo === y.codigo;
}

const catalogo = [{ codigo: 1, nombre: "tomate" }, { codigo: 2, nombre: "pepino" }];
const estado = { codigo: 1, nombre: "lechuga" };
console.log(catalogo.incluir({ codigo: 1, nombre: "lechuga" }, igual)); //Aqui comparas si existe el codigo
console.log(catalogo.includes(estado, igual));                          //Aqui se comparan dos objetos (includeS)
                                                                        //(Que no son iguales aunque compartan codigo)


// Versión 2

Array.prototype.incluir = function (elemento) {
    for (let i = 0, max = this.length; i < max; i++) {
        for(let propiedad in this[i]){
            if(elemento[propiedad]===this[i][propiedad]){
                return true;
            }
        }
    return false;
    }
}