function Mostrar()
{
    var numero=prompt("Ingrese un numero")
    var cantidadDivisores=0
    for(var conteo=1;conteo<numero;conteo++)
    {
        if(numero/conteo==0&&numero!=0)
        {
            alert(conteo)
            cantidadDivisores++
        }
    }
    alert("Cantidad de divisores="+cantidadDivisores)
}//FIN DE LA FUNCIÓN