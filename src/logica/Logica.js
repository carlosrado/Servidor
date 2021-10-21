// .....................................................................
// Logica.js
// @autor: Carlos Ramirez Dorado
// @fecha: 15/10/2021
// @descripcion: logica de negocio
// .....................................................................
const sqlite3 = require( "sqlite3" )
// .....................................................................
// .....................................................................
module.exports = class Logica {
// .................................................................
// nombreBD: Texto
// -->
// constructor () -->
// .................................................................
constructor( nombreBD, cb ) {
this.laConexion = new sqlite3.Database(
nombreBD,
( err ) => {
if( ! err ) {
this.laConexion.run( "PRAGMA foreign_keys = ON" )
}
cb( err)
})
} // ()
// .................................................................
// nombreTabla:Texto
//    -->
//       borrarFilasDe() -->
// .................................................................
borrarFilasDe( tabla ) {
return new Promise( (resolver, rechazar) => {
this.laConexion.run(
"delete from " + tabla + ";",
(err)=> ( err ? rechazar(err) : resolver() )
)
})
} // ()
// .................................................................
//    borrarFilasDeTodasLasTablas() -->
// .................................................................
async borrarFilasDeTodasLasTablas() {
await this.borrarFilasDe( "Medicion" )
} // ()
// .................................................................
// medicion:{id:N, valorCO2:N, valorTemperatura:N}
//      -->
//          insertarMedicion() -->
// .................................................................
insertarMedicion( medicion ) {
var textoSQL =
'insert into Medicion values($id, $valor, $tipo, $fecha, $hora );'
var valoresParaSQL = {$id: medicion.id, $valor: medicion.valor, $tipo: medicion.tipo, $fecha: medicion.fecha, $hora: medicion.hora }
return new Promise( (resolver, rechazar) => {
this.laConexion.run( textoSQL, valoresParaSQL, function( err ) {
( err ? rechazar(err) : resolver() )
})
})
} // ()
// .................................................................
//              obtenerMediciones() <--
//          <--
// [{id:N, valorCO2:N, valorTemperatura:N}]
// .................................................................
obtenerMediciones() {
var textoSQL = "select * from Medicion";
var valoresParaSQL = {}
return new Promise( (resolver, rechazar) => {
this.laConexion.all( textoSQL, valoresParaSQL,
( err, res ) => {
( err ? rechazar(err) : resolver(res) )
})
})
} // ()
// .................................................................
//           obtenerUltimaMedicion() <--
//       <--
// {id:N, valorCO2:N, valorTemperatura:N}
// .................................................................
obtenerUltimaMedicion() {
var textoSQL = "SELECT * FROM Medicion WHERE id=(SELECT max(id) FROM Medicion)";
var valoresParaSQL = {}
return new Promise( (resolver, rechazar) => {
this.laConexion.all( textoSQL, valoresParaSQL,
( err, res ) => {
( err ? rechazar(err) : resolver(res) )
})
})
} // ()
// .................................................................
// cerrar() -->
// .................................................................
cerrar() {
return new Promise( (resolver, rechazar) => {
this.laConexion.close( (err)=>{
( err ? rechazar(err) : resolver() )
})
})
} // ()
} // class
// .....................................................................
// .....................................................................
