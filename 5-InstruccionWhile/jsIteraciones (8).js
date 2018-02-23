function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta="si")
	{
		numero=prompt("Ingrese un numero")
		if(numero==null){
			respuesta=prompt("Desea terminar","si o no")
		}
		numero=parseInt(numero)
		if(numero==NaN){
			alert("Error, ingrese un numero")
		}
		else if(numero=0){
			alert("Cero")
		}
		contador++
		if(numero>0){
			positivo=numero+positivo
		}
		else if(numero<0){
			negativo=negativo*numero
		}

	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN