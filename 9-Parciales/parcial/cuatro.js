function Mostrar()
{
    var dato1,dato2,resultado;
    dato1=prompt("Ingrese un numero","");
    dato2=prompt("Ingrese otro numero","");
    dato1=parseInt(dato1)
    dato2=parseInt(dato2)
    if(dato1==dato2)
    {
        resultado=dato1*dato2
        document.write(resultado)
    }
    else if(dato1>dato2)
    {
        resultado=dato1-dato2
        document.write(resultado)
    }
    else if(dato1<dato2)
    {
        resultado=dato1+dato2
        document.write(resultado)
    }
}
