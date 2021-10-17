/ .....................................................................
// ReglasREST.js
// .....................................................................
module.exports.cargar = function( servidorExpress, laLogica ) {
// .......................................................
// GET /prueba
// .......................................................
servidorExpress.get('/prueba', function( peticion, respuesta ){
console.log( " * GET /prueba " )
respuesta.send( "¡Funciona!" )
}) // get /prueba
// .......................................................
// GET /persona/<dni>
// .......................................................
servidorExpress.get(
'/mediciones',
async function( peticion, respuesta ){
console.log( " * GET /mediciones " )
// llamo a la función adecuada de la lógica
var res = await laLogica.obtenerMediciones()
// si el array de resultados no tiene una casilla ...
if( res.length != 1 ) {
// 404: not found
respuesta.status(404).send( "no encontré dni: " + dni )
return
}
// todo ok
respuesta.send( JSON.stringify( res[0] ) )
}) // get /mediciones
} // cargar()
// .....................................................................
// .....................................................................
servidorExpress.get(
'/ultimaMedicion',
async function( peticion, respuesta ){
console.log( " * GET /ultimaMedicion " )
// llamo a la función adecuada de la lógica
var res = await laLogica.obtenerUltimaMedicion()
// si el array de resultados no tiene una casilla ...
if( res.length != 1 ) {
// 404: not found
respuesta.status(404).send( "no encontré dni: " + dni )
return
}
// todo ok
respuesta.send( JSON.stringify( res[0] ) )
}) // get /ultimaMedicion
} // cargar()
// .....................................................................
// .....................................................................
