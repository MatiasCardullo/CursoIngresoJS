/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
	
	//1° creo las variables
	var Temperatura, resultado;

	//2° tomo los datos insertados
	//3° los identifico como numeros
	//4° hago las operaciones aritmeticas y muestro el resultado
	
function FahrenheitCentigrados () 
{
	Temperatura=document.getElementById("Temperatura").value;
	Temperatura=parseInt(Temperatura);
	resultado=(Temperatura-32)*(0.555)
	alert(Temperatura+" Fahrenheit son "+resultado+" centígrados");
}

function CentigradosFahrenheit () 
{
	Temperatura=document.getElementById("Temperatura").value;
	Temperatura=parseInt(Temperatura);
	resultado=(1.8*Temperatura)+32
	alert(Temperatura+" centígrados son "+resultado+" Fahrenheit")	
}
