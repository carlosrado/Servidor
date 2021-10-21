//--------------------------------------------------------
//LogicaFake.js
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
const IP_PUERTO="http://localhost:8080"



function obtenerUltimaMedicion( cb ){

	fetch(IP_PUERTO+"/ultimaMedicion", {method: "get"}).then((respuesta)=>{    
		if(respuesta.status == 200){
			return respuesta.json()
		}
        else{

			throw Error(respuesta.statusText)
		}
	}).then (function(datosJSON){
        		var ul = document.getElementById("salida")
		        ul.innerHTML = ""
                var li = document.createElement("li")
                li.innerHTML = "id: " + datosJSON.id + " // valor: " + datosJSON.valor + " // tipo: " + datosJSON.tipo + " // fecha: " + datosJSON.fecha + " // hora: " + datosJSON.hora
                ul.appendChild(li)

	}).catch((err)=>{
		console.log(err)
		document.getElementById("error").innerHTML = "No se ha encontrado la ultima medicion";
	})
}

function obtenerMediciones( cb ){
    
	fetch(IP_PUERTO+"/mediciones", { method: "get" }).then((respuesta)=>{
		if(respuesta.status == 200){
			return respuesta.json()
		}else{
			throw Error(respuesta.statusText)
		}
	}).then (function(datosJSON){
        		var ul = document.getElementById("salida")
		        ul.innerHTML = ""
                datosJSON.forEach(function(item){
                    var li = document.createElement("li")
                    li.innerHTML = "id: " + item.id + " // valor: " + item.valor + " // tipo: " + item.tipo + " // fecha: " + item.fecha + " // hora: " + item.hora
                    ul.appendChild(li)
                })

	}).catch((err)=>{
		console.log(err)
		document.getElementById("error").innerHTML = "No se ha encontrado las mediciones";
	})
}