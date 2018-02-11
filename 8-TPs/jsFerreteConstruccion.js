/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

	//1° creo las variables
	var largo,ancho,radio,resultado,cemento,cal;

	//2° tomo los datos insertados
	//3° los identifico como numeros
	//4° hago las operaciones aritmeticas y muestro el resultado
function Rectangulo () 
{
	largo=document.getElementById("Largo").value;
	ancho=document.getElementById("Ancho").value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	resultado=(largo+ancho)*2*3
	alert("Se necesita "+resultado+" metros de alambre")
}
function Circulo () 
{
	radio=document.getElementById("Radio").value;
	radio=parseInt(radio);
	resultado=radio*2*3.1415
	alert("Se necesita "+resultado+" metros de alambre")
}
function Materiales () 
{
	largo=document.getElementById("Largo").value;
	ancho=document.getElementById("Ancho").value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	cemento=largo*ancho*2
	cal=largo*ancho*3
	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" de cal")
}