function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sumaNegativos=0
	var sumaPositivos=0
	var cantidadPositivos=0
	var cantidadNegativos=0
	var cantidadCeros=0
	var cantidadPares=0
	var numero=0
	var respuesta;

	while(respuesta!="si")
	{
		numero=prompt("Ingrese numero")
		if(numero==null)
		{
			respuesta=prompt("Termino?")
		}
		else{
			numero=parseInt(numero)
			if(numero==0){
				cantidadCeros++
			}
			else if(numero<0){
				sumaNegativos=numero+sumaNegativos
				cantidadNegativos++
			}
			else if(numero>0){
				sumaPositivos=numero+sumaPositivos
				cantidadPositivos++
			}
			if(numero%2==0&&numero!=0){
				cantidadPares++
			}
		}
	}
promedioDePositivos=sumaPositivos/cantidadPositivos
promedioDeNegativos=sumaNegativos/cantidadNegativos
diferencia=sumaPositivos-sumaNegativos
//"<br>"
}//FIN DE LA FUNCIÓN