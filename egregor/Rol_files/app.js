// Función minificadora de cifras
function minificar(array, maxCifra = 1){
    
    // Declaración
    var arrSumado = 0;
    
    // Por cada numero del array Nn1, suma cada numero a la variable y lo convierte en numero
    array.forEach((numero, indice)=>{
        arrSumado = arrSumado + Number(array[indice]);
    });
    
    // Variable para contar el numero de cifras
    var zNumber = arrSumado.toString().length;
    
    console.log("Comenzado minificación...");
    console.log("Array sumado: " + arrSumado); 
    console.log("Número de cifras: " + zNumber);  
    console.log("***********************");
    
    // Mientras que el numero de cifras es mayor que 1, suma las cifras
    while(zNumber > maxCifra){
        
        // Creo un array de la suma de todos los numeros
        var x = Array.from(arrSumado.toString());
        // Creo una nueva variable
        var nuevasuma = 0;
        // Suma en la nueva variable todos los numero del array
        x.forEach((numero)=>{
            nuevasuma += Number(numero);
        });
        // Asigna el valor de la nueva variable a la del array sumado
        arrSumado = nuevasuma;
        
        console.log("El numero tiene mas de una cifra.");
        console.log("Creando nueva minificación...");
        console.log("Array de los numero de la suma: " + x);
        console.log("Nueva suma: " + nuevasuma);
        console.log("***********************");
        
        // Vuelve a calcular el zNumber para saber cuantas cifras tiene, por si hay que repetir el bucle
        zNumber = arrSumado.toString().length;
    }
    
    console.log("Minificación finalizada");
    console.log("***********************");
    
    return arrSumado;
    
}

// Función para crear el personaje
function Pj(set_name, owner){
    
// Esta función crea un personaje en base al nombre

// Objeto personaje

    //owner = owner,           // Nombre del propietario
    name = "",               // Nombre introducido por promp
    aname = [],              // Nombre convertido a string
    Nname = "",              // Suma de letras como numeros, siendo cada letra un numero ordinal. String
    Nn1 = [],                // Array de los numeros de la mitad del Nname
    Nn2 = [],                // Array de los numeros de la segunda mitad del Nname
    Rn1 = 0,                 // Numero minificado de entre todos los numero de Nn1
    Rn2 = 0,                 // Numero minificado de entre todos los numero de Nn2
    raza = "",               // Raza calculada en base a Rn1
    elemento = "",           // Elemento calculo en base a Rn2
    clan = "",               // Clan caulculado de la combinación de razas y elementos
    profesion = "",          // Profesión calculada en base al mayor stat y al elemento
    this.stats = {                // Stats. 3 por defecto. +1 en 4 stats en base al elemento. +1 o +2 en base a la raza y al elemento
      resistencia: 3,
      barrera: 3,
      fuerza: 3,  
      precision: 3,  
      armadura: 3,  
      contraataque: 3,  
      rapidez: 3,  
      evasion: 3,  
    }

// Pido el nombre
this.name = set_name;   

// Divido el nombre en un array descomponiendo en letras
this.aname = Array.from(this.name);

// Imprimo en pantalla nombre y el array    
console.log("Nombre: " + this.name);
console.log("Array Name: " + this.aname);
console.log("***********************");

// Creo un array que contiene todas las letras        
var abc = Array.from("abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ");
// Lo imprimo en pantalla
console.log("Comparando letras con su posición en el abecedario: " + abc);
console.log("***********************");

// Creo un bucle que recorre el array del nombre comparandolo con el array de todas las letras,
// si encuentra alguna coincidencia, añade el número de la posición de esa letra en su array
// a la propiedad del personaje Nname para generar un número de la suma de todos los caracteres de las coincidencias
    
console.log("Valores numéricos de cada una de las letras:")
    
var aName = this.aname;
var nName = "";
    
for(i = 0; i < this.aname.length; i++){
    var comp = aName[i];
    var corr = Number(abc.indexOf(comp));
    console.log(corr);
    
    nName += corr;
}
    
this.Nname = nName;
    
// Implimo la proriedad con el número compuesto de todas las cifras de las detras equivalentes, es un string
    
console.log("***********************");

console.log("Creando ID con la concatenación de todas las cifras: ")    
console.log("ID: " + this.Nname);   
    
console.log("***********************");
    
// Convierto el string a número
    
Number(this.Nname);
    
// Divido el número en 2 array diferentes y los guardo en proiedades del objeto personaje
    
this.Nn1 = Array.from(this.Nname.substr(0, this.Nname.length/2));
this.Nn2 = Array.from(this.Nname.substr(this.Nname.length/2, this.Nname.length));
    
// Imprimo en pantalla las propiedades del objeto
    
console.log("Dividiendo la ID en dos cadenas y creando nuevos array: ")
    
console.log("NN 1: " + this.Nn1);
console.log("NN 2: " + this.Nn2);
console.log("***********************");

// Minificando los numeros...
    
var minN1 = minificar(this.Nn1);
var minN2 = minificar(this.Nn2);

console.log("Arrays minificados a una cifra para crear parámetros de personaje...")
console.log("minN1: " + minN1); 
console.log("minN2: " + minN2); 
console.log("***********************");    
    
//for(i = 0; i < this.Nn1.length; i++){
//    arrSumado = arrSumado + Number(this.Nn1[i]);
//}

    
// ANTIGUO - Elijo un numero aleatorio de cada uno de los 2 array y lo guardo en otra propiedad
    
// this.Rn1 = this.Nn1[Math.floor(Math.random() * this.Nn1.length)];
// this.Rn2 = this.Nn2[Math.floor(Math.random() * this.Nn2.length)];
    
// NUEVO - Las variables ahora se generan con la funcion minificar
    
this.Rn1 = minN1;
this.Rn2 = minN2;
    
// Imprimo el numero aleatorio elegido
    
console.log("RN 1: " + this.Rn1);
console.log("RN 2: " + this.Rn2);
console.log("***********************");

// Variable para trabajar con stats
    
var get_st = this.stats; 
    
var res = 0;
var bar = 0;
var fue = 0;
var pre = 0;
    
var arm = 0;
var con = 0;
var rap = 0;
var eva = 0;
    
// Asignar Raza
    
// Condicionales para asignar raza en funcion de la propiedad RN (numero random)
// A mejorar: con decimales funcionaria mejor... es mas probable que te toque hombre o bestia por tener 3 resultados posibles
    
// Tambien añade parametros propios de la raza    
    
// De 0 a 2 es humano
// De 3 a 5 es bestia
// De 6 a 7 es orco
// De 7 a 9 es elfo
    
var raza;
    
if(this.Rn1 >= 0 && this.Rn1 <= 2){
    raza = "Humano";
    arm += 1;
    con += 1;
}else if(this.Rn1 >= 3 && this.Rn1 <= 5){
    raza = "Bestia";
    res += 1;
    bar += 1;
}else if(this.Rn1 >= 6 && this.Rn1 <= 7){
    raza = "Orco";
    fue += 1;
    pre += 1;
}else if(this.Rn1 >= 8 && this.Rn1 <= 9){
    raza = "Elfo";
    rap += 1;
    eva += 1;
}
    
this.raza = raza;
console.log("Raza asignada: " + this.raza);
    
// Asignar Elemento
    
// Condicionales para asignar raza en funcion de la propiedad RN (numero random)
    
// De 0 a 1 es agua
// De 2 a 3 es madera
// De 4 a 5 es fuego
// De 6 a 7 es metal
// De 8 a 9 es tierra
    
if(this.Rn2 >= 0 && this.Rn2 <= 1){
    this.elemento = "Agua";
    res += 1;
    pre += 1;
    eva += 1;
    rap += 1;
}else if(this.Rn2 >= 2 && this.Rn2 <= 3){
    this.elemento = "Madera";
    res += 1;
    bar += 1;
    arm += 1;
    rap += 1;
}else if(this.Rn2 >= 4 && this.Rn2 <= 5){
    this.elemento = "Fuego";
    fue += 1;
    pre += 1;
    con += 1;
    eva += 1;
}else if(this.Rn2 >= 6 && this.Rn2 <= 7){
    this.elemento = "Metal";
    fue += 1;
    bar += 1;
    arm += 1;
    rap += 1;
}else if(this.Rn2 >= 8 && this.Rn2 <= 9){
    this.elemento = "Tierra";
    fue += 1;
    bar += 1;
    arm += 1;
    con += 1;
}

console.log("Elemento asignado: " + this.elemento);
    
// Asignar Clan
    
// Un condicional swich comprueba qué raza y qué elemento dentro de esa raza es
// Le asigna un nombre de clan en funcion de la coincidencia
// Aumenta los stats en base al clan
    
switch(this.raza){
    case "Humano":
        switch(this.elemento){
            case "Madera":
                res += 2;
                this.clan = "Arcano";
            break;
            case "Fuego":
                pre += 1;
                this.clan = "Trinchera feroz";
            break;
            case "Tierra":
                arm += 2;
                this.clan = "Escolta de Arena";
            break;
            case "Metal":
                fue += 1;
                this.clan = "Guardia de Hierro";
            break;
            case "Agua":
                eva += 1;
                this.clan = "Cazarrecompensas";
            break;
        }
    break;
    case "Elfo":
        switch(this.elemento){
            case "Madera":
                arm += 1;
                this.clan = "Muro de Sauce";
            break;
            case "Fuego":
                con += 1;
                this.clan = "Espina de fuego";
            break;
            case "Tierra":
                bar += 2;
                this.clan = "Ginete de la Duna";
            break;
            case "Metal":
                rap += 2;
                this.clan = "Iluminado";
            break;
            case "Agua":
                pre += 1;
                this.clan = "Hermanos del Kraken";
            break;
        }
    break;
    case "Orco":
        switch(this.elemento){
            case "Madera":
                rap += 1;
                this.clan = "Bandido";
            break;
            case "Fuego":
                fue += 2;
                this.clan = "Vanguardia Negra";
            break;
            case "Tierra":
                con += 2;
                this.clan = "Comando Escorpión";
            break;
            case "Metal":
                bar += 1;
                this.clan = "Herreros del Infierno";
            break;
            case "Agua":
                rap += 1;
                this.clan = "Piratas sin Bandera";
            break;
        }
    break;
    case "Bestia":
        switch(this.elemento){
            case "Madera":
                bar += 1;
                this.clan = "Licántropo";
            break;
            case "Fuego":
                eva += 1;
                this.clan = "Naga";
            break;
            case "Tierra":
                fue += 2;
                this.clan = "Djin";
            break;
            case "Metal":
                arm += 1;
                this.clan = "Elemental";
            break;
            case "Agua":
                res += 2;
                this.clan = "Sirena";
            break;
        }
    break;
}    
    
console.log("Clan asignado: " + this.clan);
    
// Profesión
    
// Creo un array con los valores de todos los stat
    
//var res = 0;
//var bar = 0;
//var fue = 0;
//var pre = 0;
//    
//var arm = 0;
//var con = 0;
//var rap = 0;
//var eva = 0;
    
var arrSt = [res, bar, fue, pre, arm, con, rap, eva];
    
console.log("***********************"); 
    
// Busco el indice del mayor valor 
    
console.log("Buscando el parámetro más elevado para crear profesión...")    
    
var bestStIndex = arrSt.indexOf(Math.max.apply(null, arrSt));
    
console.log("Índice del parámetro más elevado: " + bestStIndex);
    
// Con un condicional swich compruebo el indice para saber que stat es el principal
// En cada caso, anido un switch para saber que elemento tiene
// Asi pongo una profesion segun el stat mas alto y el elemento
    
switch(bestStIndex){
    case 0: // Resistencia
        switch(this.elemento){
            case "Madera":
                this.profesion = "Escolta";
            break;
            case "Fuego":
                this.profesion = "Hostigador";
            break;
            case "Tierra":
                this.profesion = "Sabio";
            break;
            case "Metal":
                this.profesion = "Herrero";
            break;
            case "Agua":
                this.profesion = "Buceador";
            break;
        } // Resistencia
        case 1: // Barrera
        switch(this.elemento){
            case "Madera":
                this.profesion = "Centinela";
            break;
            case "Fuego":
                this.profesion = "Escudero";
            break;
            case "Tierra":
                this.profesion = "Clérigo";
            break;
            case "Metal":
                this.profesion = "Acorazado";
            break;
            case "Agua":
                this.profesion = "Rompehielo";
            break;
        } // Barrera
        case 2: // Fuerza
        switch(this.elemento){
            case "Madera":
                this.profesion = "Invocador";
            break;
            case "Fuego":
                this.profesion = "Legionario";
            break;
            case "Tierra":
                this.profesion = "Beduino";
            break;
            case "Metal":
                this.profesion = "Verdugo";
            break;
            case "Agua":
                this.profesion = "Mago";
            break;
        } // Fuerza
        case 3: // Precision
        switch(this.elemento){
            case "Madera":
                this.profesion = "Cazador";
            break;
            case "Fuego":
                this.profesion = "Arquero";
            break;
            case "Tierra":
                this.profesion = "Bandido";
            break;
            case "Metal":
                this.profesion = "Espadachín";
            break;
            case "Agua":
                this.profesion = "Arponero";
            break;
        } // Precision  
        case 4: // Armadura
        switch(this.elemento){
            case "Madera":
                this.profesion = "Sacerdote";
            break;
            case "Fuego":
                this.profesion = "Invasor";
            break;
            case "Tierra":
                this.profesion = "Traficante";
            break;
            case "Metal":
                this.profesion = "Agente";
            break;
            case "Agua":
                this.profesion = "Marine";
            break;
        } // Armadura  
        case 5: // Contraataque
        switch(this.elemento){
            case "Madera":
                this.profesion = "Pacificador";
            break;
            case "Fuego":
                this.profesion = "Caballero";
            break;
            case "Tierra":
                this.profesion = "Vengador";
            break;
            case "Metal":
                this.profesion = "Ballestero";
            break;
            case "Agua":
                this.profesion = "Profanador";
            break;
        } // Contraataque  
        case 6: // Rapidez
        switch(this.elemento){
            case "Madera":
                this.profesion = "Domador";
            break;
            case "Fuego":
                this.profesion = "Infiltrado";
            break;
            case "Tierra":
                this.profesion = "Explorador";
            break;
            case "Metal":
                this.profesion = "Asesino";
            break;
            case "Agua":
                this.profesion = "Navegante";
            break;
        } // Rapidez  
        case 7: // Evasion
        switch(this.elemento){
            case "Madera":
                this.profesion = "Herrante";
            break;
            case "Fuego":
                this.profesion = "Artillero";
            break;
            case "Tierra":
                this.profesion = "Espiritista";
            break;
            case "Metal":
                this.profesion = "Duelista";
            break;
            case "Agua":
                this.profesion = "Profundo";
            break;
        } // Evasion
    break;
}

console.log("Ultimando stats de personaje...")
    
this.stats.resistencia += res;
this.stats.barrera += bar;
this.stats.fuerza += fue;
this.stats.precision += pre;
    
this.stats.armadura += arm;
this.stats.contraataque += con;
this.stats.rapidez += rap;
this.stats.evasion += eva;
    
console.log("Profesion asignada: " + this.profesion);
    
} // Fin de la funcion

// Función para saltar a diferentes alturas de pagina
function jump(h){
    var top = document.getElementById(h).offsetTop; //Getting Y of target element
    window.scroll({
      top: top, 
      left: 0, 
      behavior: 'smooth' 
    });
}

//Función que imprime los valores del pj y redirige a sección info
function afterBorn(pj, the_context = document){
    
    // Buscando localizaciones para imprimir datos en pantalla
    
    var context  = document.querySelector(the_context);
    
    var titPlace = context.querySelector(".name");
    var idPlace  = context.querySelector(".id");
    var razPlace = context.querySelector(".raza");
    var elePlace = context.querySelector(".elemento");
    var claPlace = context.querySelector(".clan");
    var proPlace = context.querySelector(".profesion");

    var resPlace = context.querySelector(".res");
    var barPlace = context.querySelector(".bar");
    var fuePlace = context.querySelector(".fue");
    var prePlace = context.querySelector(".pre");
    var armPlace = context.querySelector(".arm");
    var conPlace = context.querySelector(".con");
    var rapPlace = context.querySelector(".rap");
    var evaPlace = context.querySelector(".eva");


    // Imprimiendo valores en pantalla   

    titPlace.innerHTML = (pj.name);
    idPlace.innerHTML  = (pj.Nname);
    razPlace.innerHTML = (pj.raza);
    elePlace.innerHTML = (pj.elemento);
    claPlace.innerHTML = (pj.clan);
    proPlace.innerHTML = (pj.profesion);

    resPlace.innerHTML = (pj.stats.resistencia);
    barPlace.innerHTML = (pj.stats.barrera);
    fuePlace.innerHTML = (pj.stats.fuerza);
    prePlace.innerHTML = (pj.stats.precision);
    armPlace.innerHTML = (pj.stats.armadura);
    conPlace.innerHTML = (pj.stats.contraataque);
    rapPlace.innerHTML = (pj.stats.rapidez);
    evaPlace.innerHTML = (pj.stats.evasion);

    // Redirigiendo a pantalla inferior si es el jugador
    
    if(pj.owner = "player"){
        jump("info");
    }
    
}

// Función para generar nuevo nombre
function create_Name(set_seed_name, owner){
    
    console.log("***********************");
    
    console.log("Creando nuevo nombre a partir de: " + set_seed_name);
    
    var seed = set_seed_name;
    
    var vocales = Array.from("aeiouAEIOU");
    
    var consonantes = Array.from("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ");
    
    var aSeed = Array.from(seed);
    
    var vSeed = [];
    
    var cSeed = [];
    
    console.log("El array del nombre es: " + aSeed);
    
    function isVowel(x) {  return /[aeiouAEIOU]/.test(x); }
    
    aSeed.forEach((letra)=>{
        
        var is_vowel = isVowel(letra);
            
        if(is_vowel == true){
            vSeed += letra;
        }else{
            cSeed += letra;
        }
        
    });
    
    console.log("Las vocales son: " + vSeed);
    console.log("Las consonantes son: " + cSeed);
    
    console.log("***********************");
    
    console.log("Creando sílabas. Inviertiendo orden de las letras...")
    
    // Invirtiendo orden de vocales y consonantes
    
    var icSeed = Array.from(cSeed).reverse().join("");
    var ivSeed = Array.from(vSeed).reverse().join("");
    
    console.log("Consonantes invertidas: " + icSeed);
    console.log("Vocales invertidas: " + ivSeed);
    
    var newName = "";
    
    for(i = 0; i < icSeed.length; i++){
        
        if(newName.length < icSeed.length){
            newName += icSeed.substr(i, i+1) + ivSeed.substr(i, i+1);   
        }
        
    }
    
    newName = newName.trim();
    newName = newName.charAt(0).toUpperCase() + newName.slice(1);
    owner = newName;
    
    console.log("***********************");
    
    console.log("Nombre generado: " + newName);
    
    console.log("***********************"); 
    
    return owner;
    
    console.log("Nombre generado correctamente.")
    
    console.log("***********************");
    
} // Fin de la funcion

// Función para crear colores
function create_Color(seed, tag){
    
    var id = seed.substr(0, 3);
    
    if(id > 360){
        id = id - 360;
        console.log("Hue generado: " + id);
    }
    
    console.log("Color MAIN generado correctamente");
    console.log("Generando color complementario...");
    
    var comp;
    
    if(id > 360){
        comp = id - 180;
    }else{
        comp = id + 180;
    }
    
    console.log("Color COMPLEMENTARIO generado: " + comp);
    
    var print = `

    <style>

    :root{

    /*MAIN color*/
    --mainH: ${id};
    --mainS: 60%;
    --mainL: 50%;

    --mainC: hsl( var(--mainH), var(--mainS), var(--mainL) );
    --mainCD: hsl( var(--mainH), var(--mainS), 30% );

    --mainG: linear-gradient( var(--mainC), var(--mainCD) );

    /*COMPLEMENTARIO color*/
    --compH: ${comp};
    --compS: 60%;
    --compL: 50%;

    --compC: hsl( var(--compH), var(--compS), var(--compL) );
    --compCD: hsl( var(--compH), var(--compS), 30% );

    --compG: linear-gradient( var(--compC), var(--compCD) );

    }

    </style>

    `;
    
    document.write(print);
    
}

// Esta función valida que el nombre solo tenga letras y no este vacio
// Se ejecuta en el formulario

function validateForm() {
    
    var x = document.forms["namingForm"]["name"].value;

    if (x == "") {
        alert("Escribe un nombre para generar un personaje");
        document.myForm.name.focus();
        return false;
    }
    
    if (!/^[a-zA-Z ]*$/g.test(x)) {
        alert("El nombre solo puede contener mayúsculas, minúsculas y espacios");
        document.myForm.name.focus();
        return false;
    }
    
}

// Guardo la URL de la pagina
var url_string = window.location.href;

// La convierto
var url = new URL(url_string);

var the_name = the_name = url.searchParams.get("name");
    
console.log("***********************");
    
// Imprimo en consola la URL
console.info("La URL es: " + url_string);
    
// Imprimo en consola la URL
console.info("El valor del nombre es: " + the_name);
    
console.log("***********************");
    
// Ejecuto la función con el valor del nombre si conitiene algo
if(the_name != null && /^[a-zA-Z ]*$/g.test(the_name) ){
    
    console.log("Empezando a crear personaje PLAYER...");
    
    console.log("***********************");
    
    var player = new Pj(the_name, player); 
    
    afterBorn(player, "#info");
    
    console.log("***********************");
    
    console.log("Personaje PLAYER creado correctamente.");
    
    console.log("***********************");
    
    console.log("Generando colores...");
    
    create_Color(player.Nname);
    
    console.log("***********************");
    
    console.log("Creando Nombre de Némesis...");
    
    var the_nem_name = create_Name(the_name, the_nem_name);
    
    console.log("El némesis es: " + the_nem_name);
    
    console.log("Creando Némesis a partir de " + the_nem_name + "...");
    
    var nemesis = new Pj(the_nem_name, nemesis);
    
    afterBorn(nemesis, "#nemesis");
    
}else{
    
    console.log("El programa necesita un nombre para comenzar");

}