function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
	numero=Math.random()*(11-1)+1
	numero=parseInt(numero)
	if(numero>=9)
	{
		alert("excelente")
	}
	else if(numero>=6&&numero<=8)
	{
		alert("muy bien")
	}
	else if(numero>=4&&numero<=5)
	{
		alert("bien")
	}
	else if(numero>=3&&numero<=2)
	{
		alert("mal")
	}
	else if(numero>=1&&numero<=0)
	{
		alert("desastroso")
	}
}//FIN DE LA FUNCIÓN