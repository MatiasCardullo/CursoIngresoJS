function Mostrar()
{
    var numero=prompt("Ingrese un numero")
    var cantidadPares=0
    for(var conteo=1;conteo<numero;conteo++)
    {
        if(conteo%2==0&&conteo!=0)
        {
            alert("Pares="+conteo)
            cantidadPares++
        }
    }
    alert("Cantidad de pares="+cantidadPares)
}//FIN DE LA FUNCIÓN