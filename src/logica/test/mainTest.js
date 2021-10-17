// ........................................................
// mainTest1.js
// ........................................................
const Logica = require( "../Logica.js" )
var assert = require ('assert')
// ........................................................
// main ()
// ........................................................
describe( "Test 1: insertar una medicion", function() {
// ....................................................
// ....................................................
var laLogica = null
// ....................................................
// ....................................................
it( "conectar a la base de datos", function( hecho ) {
laLogica = new Logica(
"../bd/datos.bd",
function( err ) {
if ( err ) {
throw new Error ("No he podido conectar con datos.db")
}
hecho()
})
}) // it
// ....................................................
// ....................................................
it( "borrar todas las filas", async function() {
await laLogica.borrarFilasDeTodasLasTablas()
}) // it
// ....................................................
// ....................................................
it( "puedo obtener ultima medicion",
async function() {
await laLogica.insertarMedicion(
{ valorCO2: 55,
valorTemperatura: 17 } )
var res = await laLogica.obtenerUltimaMedicion()
assert.equal( res.length, 1, "¿no hay un resulado?" )
assert.equal( res[0].valorCO2, 55, "¿no es 55?" )
assert.equal( res[0].valorTemperatura, 17, "¿no es 17?" )
}) // it
// ....................................................
// ....................................................
it( "puedo obtener mediciones",
async function() {
await laLogica.borrarFilasDeTodasLasTablas()
await laLogica.insertarMedicion(
{ valorCO2: 55,
valorTemperatura: 17 } )
await laLogica.insertarMedicion(
{ valorCO2: 55,
valorTemperatura: 17 } )
await laLogica.insertarMedicion(
{ valorCO2: 55,
valorTemperatura: 17 } )
await laLogica.insertarMedicion(
{ valorCO2: 55,
valorTemperatura: 17 } )
var res = await laLogica.obtenerMediciones()
assert.equal( res.length, 4, "¿no hay 4 mediciones?" )
assert.equal( res[2].valorCO2, 55, "¿no es 55?" )
assert.equal( res[3].valorTemperatura, 17, "¿no es 17?" )
}) // it
// ....................................................
// ....................................................
it( "cerrar conexión a la base de datos",
async function() {
try {
await laLogica.cerrar()
} catch( err ) {
// assert.equal( 0, 1, "cerrar conexión a BD fallada: " + err)
throw new Error( "cerrar conexión a BD fallada: " + err)
}
}) // it
}) // describe
