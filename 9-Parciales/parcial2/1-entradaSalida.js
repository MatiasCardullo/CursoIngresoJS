//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var lado=document.getElementById("lado").value
	lado=parseInt(lado)
	var perimetro=lado*3
	alert("El perimetro del tiangulo es de "+perimetro);
}

