// .....................................................................
// ReglasREST.js
// @autor: Carlos Ramirez Dorado
// @fecha: 15/10/2021
// @descripcion: reglas para el servidor rest
// .....................................................................
var fs = require('fs')

module.exports.cargar = function( servidorExpress, laLogica ) {
// .......................................................
// GET /prueba
// .......................................................
servidorExpress.get('/prueba', function( peticion, respuesta ){
console.log( " * GET /prueba " )
respuesta.send( "¡Funciona!" )
}) // get /prueba
// .......................................................
// GET /mediciones
// .......................................................
servidorExpress.get(
'/mediciones',
async function( peticion, respuesta ){
console.log( " * GET /mediciones " )
var res = await laLogica.obtenerMediciones()
var last = await laLogica.obtenerUltimaMedicion()
if( res.length < 1) {
// 404: not found
respuesta.status(404).send( "no encontré las mediciones")
return
}
//200: todo ok
respuesta.send( JSON.stringify( res ) )
}) // get /mediciones
// .....................................................................
// .....................................................................
// .......................................................
// GET /ultimaMedicion
// .......................................................
servidorExpress.get(
'/ultimaMedicion',
async function( peticion, respuesta ){
console.log( " * GET /ultimaMedicion " )
var res = await laLogica.obtenerUltimaMedicion()
// si el array de resultados no tiene una casilla ...
if( res.length != 1 ) {
// 404: not found
respuesta.status(404).send( "no encontré la ultima medicion")
return
}
//200: todo ok
respuesta.send( JSON.stringify( res[0] ) )
}) // get /ultimaMedicion
// .....................................................................
// .....................................................................
} // cargar()
// .....................................................................
// .....................................................................
