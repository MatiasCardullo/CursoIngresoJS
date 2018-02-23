function Mostrar()
{

	// declarar variables
	var numero
	var respuesta;
	var maximo;
	var minimo
	
	while(respuesta!='si')
	{
		numero=prompt("Ingrese numero")
		if(numero==null){
			respuesta=prompt("desea terminar?")
		}
		numero=parseInt(numero)
		if(numero==0)
		{
			maximo=numero
			minimo=numero
			if(numero>maximo)
			{
				maximo=numero
			}
			else if(numero<minimo)
			{
				minimo=numero
			}
		}
	}
	document.getElementById("maximo").value=maximo
	document.getElementById("minimo").value=minimo
}//FIN DE LA FUNCIÓN