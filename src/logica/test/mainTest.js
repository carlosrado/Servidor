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
{ valor:12, tipo:"temperatura", fecha:"2021-4-10", hora: "12:12:12" } )
var res = await laLogica.obtenerUltimaMedicion()
assert.equal( res.length, 1, "¿no hay un resulado?" )
assert.equal( res[0].valor, 12, "¿no es 12?" )
assert.equal( res[0].id, 1, "¿no es 1?" )
}) // it
// ....................................................
// ....................................................
it( "puedo obtener mediciones",
async function() {
await laLogica.borrarFilasDeTodasLasTablas()
await laLogica.insertarMedicion(
{ valor:12, tipo:"temperatura", fecha:"2021-4-10", hora: "12:12:12" })
await laLogica.insertarMedicion(
{ valor:82, tipo:"CO2", fecha:"2021-5-6", hora: "12:00:12" })
await laLogica.insertarMedicion(
{ valor:18, tipo:"CO2", fecha:"2021-12-12", hora: "22:12:12" })
await laLogica.insertarMedicion(
{ valor:-2, tipo:"temperatura", fecha:"2021-10-10", hora: "10:10:12" })
var res = await laLogica.obtenerMediciones()
assert.equal( res.length, 4, "¿no hay 4 mediciones?" )
assert.equal( res[2].valor, 18, "¿no es 18?" )
assert.equal( res[3].hora, "10:10:12", "¿no es 10:10:12?" )
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
