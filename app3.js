console.log('Inicio del programa');

//función que va ejecutar algo en determinado tiempo
setTimeout(function() {
    console.log('Primer Timeout');
}, 3000); // a los 3 segundos se va ejecutar lo de adentro

setTimeout(function() {
    console.log('Segundo Timeout');
}, 0); // a los 0 segundos se va ejecutar lo de adentro
setTimeout(function() {
    console.log('Tercer Timeout');
}, 0); // a los 0 segundos se va ejecutar lo de adentro

console.log('Fin del programa');