//--------------------------------------------------------
//LogicaFake.js
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
const IP_PUERTO="http://localhost:8080"

function obtenerUltimaMedicion(cb){
  fetch(IP_PUERTO+"/ultimaMedicion" , {
		method: "get",
        mode: 'no-cors'
	}).then((respuesta)=>{
		if(respuesta.status == 200){
			return respuesta.json()
		}else{
			throw Error(respuesta.statusText)
		}
    if(respuesta.status == 200){
			return respuesta.json()
		}else{
			throw Error(respuesta.statusText)
		}
	}).then (function(datosJSON){
    borrarLista(document.getElementById("lista"));
    var medicion = document.createElement("li")
    medicion.innerHTML = datoJSON['Medicion']
    document.getElementById("lista").appendChild(medicion)	}).catch((err)=>{
		console.log(err)
		document.getElementById("error").innerHTML = "No se ha encontrado la ultima medicion";
	})
}

function obtenerMediciones( cb ){
	fetch(IP_PUERTO+"/mediciones" , {
		method: "get",
        mode: 'no-cors'
	}).then((respuesta)=>{

ç

		if(respuesta.status == 200){
			return respuesta.json()
		}else{
			throw Error(respuesta.statusText)
		}
    if(respuesta.status == 200){
			return respuesta.json()
		}else{
			throw Error(respuesta.statusText)
		}
	}).then (function(datosJSON){
    borrarLista(document.getElementById("lista"));
    for(var i = 0; i<datosJSON.length;i++){
      var dato = datosJSON[i];
      var medicion = document.createElement("li")
      medicion.innerHTML = dato['Medicion']
      document.getElementById("lista").appendChild(medicion)
    }
	}).catch((err)=>{
		console.log(err)
		document.getElementById("error").innerHTML = "No se han encontrado las mediciones";
	})
}
function borrarLista( lista ){
  for(var i = 0; i < lista.length;i++){
    document,getElementById(lista).removeChild(document,getElementById(lista).lastChild())
  }
}
