//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe=prompt("Ingrese el precio del producto")
	importe=parseInt(importe)
	var importeFinal=importe*1.21
	document.getElementById("importe").value=importeFinal
}

