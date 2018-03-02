function Mostrar()
{
	var largo=document.getElementById("alrgo").value
	var ancho=document.getElementById("ancho").value
	largo=parseInt(largo)
	ancho=parseInt(ancho)
	var perimetro=largo*2+ancho*2
	perimetro=perimetro*3
	alert("Se necesitan "+perimetro+" metros de alambre para alambrar 3 veces su perímetro");
}
