// Asincronia y Stack

// ESTA TAREA NO TIENE TEST AUTOMATICOS INCORPORADORS
// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? Piensa primero cual será el resultado y escribelo. Luego prueba ver la respuesta usando la siguiente pagina: https://jsconsole.com/  y presioná enter, asi obtendras el resultado automaticamente)

function imprimir() {
    console.log(1);
    setTimeout (function() {console.log(2); }, 1000);
    setTimeout(function() {console.log(3); }, 0);
    console.log (4);
}

imprimir();


//El orden seria 1,4,3,2. El hecho de tener un setTimeout hace que vayan a lo ultimo
//Por eso primero se muestran los console.log y despues los setTimeout ordenados depende el tiempo que se les haya asignado