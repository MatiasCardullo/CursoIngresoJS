/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
	
	//1° creo las variables
	var PrecioUno,PrecioDos,PrecioTres,Resultado

	//2° tomo los datos insertados
	//3° los identifico como numeros
	//4° hago las operaciones aritmeticas y muestro el resultado
function Sumar () 
{
	PrecioUno=document.getElementById("PrecioUno").value;
	PrecioDos=document.getElementById("PrecioDos").value;
	PrecioTres=document.getElementById("PrecioTres").value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
	Resultado=PrecioUno+PrecioDos+PrecioTres;
	alert("Total: "+Resultado+"$");
}
function Promedio () 
{
	PrecioUno=document.getElementById("PrecioUno").value;
	PrecioDos=document.getElementById("PrecioDos").value;
	PrecioTres=document.getElementById("PrecioTres").value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
	Resultado=(PrecioUno+PrecioDos+PrecioTres)/3;
	alert("Promedio: "+Resultado+"$");
}
function PrecioFinal () 
{
	PrecioUno=document.getElementById("PrecioUno").value;
	PrecioDos=document.getElementById("PrecioDos").value;
	PrecioTres=document.getElementById("PrecioTres").value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
	Resultado=(PrecioUno+PrecioDos+PrecioTres)*1.21;
	alert("Total (IVA 21%): "+Resultado+"$");
}