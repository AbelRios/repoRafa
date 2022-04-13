/* 43.Ejercicio
Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare. Tendrá la
estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39
Nota: deberás utilizar “Esperar” y “Limpiar pantalla”. */

console.clear();

let tiempo = 0;

setInterval(showTime,1000);

function showTime(){
    let hora=Math.floor(tiempo/3600);
    let minutos=(tiempo%3600);
    let segundos=(tiempo%3600)%60;

    console.log(hora, " : ", minutos, " : ", segundos);
    tiempo++;
}
