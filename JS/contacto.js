var nombre=document.getElementById('nombre')
var pedido=document.getElementById('pedido')
var consulta=document.getElementById('consulta')
var correo=document.getElementById('correo')

function validaDatos(){
	nombre.addEventListener('input',valUsuario)
	pedido.addEventListener('input',valPedido)
	correo.addEventListener('input',valCorreo)
	consulta.addEventListener('input',valConsulta)

	valUsuario()
	valPedido()
	valCorreo()
	valConsulta()
}

function valUsuario(){
	if (nombre.value==''){
		nombre.style.backgroundColor='rgb(249, 250, 247'
		nombre.setCustomValidity('Ingresa un Nombre')
	} else{
		nombre.style.backgroundColor='rgb(160, 167, 121'
		nombre.setCustomValidity('')
	}
}

function valPedido(){
	if (pedido.value==''){
		pedido.style.backgroundColor='rgb(249, 250, 247'
		pedido.setCustomValidity('Ingresa tu Pedido')
	} else{
		pedido.style.backgroundColor='rgb(160, 167, 121'
		pedido.setCustomValidity('')
	}
}

function valCorreo(){
	if (correo.value==''){
		correo.style.backgroundColor='rgb(249, 250, 247'
		correo.setCustomValidity('Ingresa tu Pedido')
	} else{
		correo.style.backgroundColor='rgb(160, 167, 121'
		correo.setCustomValidity('')
	}
}

function valConsulta(){
	if (consulta.value==''){
		consulta.style.backgroundColor='rgb(249, 250, 247'
		consulta.setCustomValidity('')
	} else{
		consulta.style.backgroundColor='rgb(160, 167, 121'
		consulta.setCustomValidity('')
	}
}

window.addEventListener('load', validaDatos)