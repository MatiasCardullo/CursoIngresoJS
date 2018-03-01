function Mostrar()
{
    var numero=prompt("Ingrese un numero")
    var cantidadDivisores=0
    for(var conteo=1;conteo<=numero;conteo++)
    {
        if(numero%conteo==0&&numero!=0)
        {
            cantidadDivisores++
        }
    }
    if(cantidadDivisores==2)
    {
        alert(numero+" es un numero primo")
    }
    else
    {
        alert(numero+" no es un numero primo")
    }
}//FIN DE LA FUNCIÓN