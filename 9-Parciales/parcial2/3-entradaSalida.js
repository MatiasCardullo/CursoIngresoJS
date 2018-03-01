//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo=document.getElementById("largo").value
	var ancho=document.getElementById("ancho").value
	largo=parseInt(largo)
	ancho=parseInt(ancho)
	var perimetro=largo*2+ancho*2
	perimetro=perimetro*6
	alert("Se necesitan "+perimetro+" metros de alambre para alambrar 6 veces su perímetro");
}

