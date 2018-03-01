/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () 
{
    var numero=document.getElementById("numero").value
    var cantidadPares=0
    for(var conteo=1;conteo<numero;conteo++){
        if(conteo%2==0){
            alert("Pares="+conteo)
            cantidadPares++
        }
    }
    alert("Cantidad de pares="+cantidadPares)
}
function NumerosImpares () 
{
    var numero=document.getElementById("numero").value
    var cantidadImpares=0
    for(var conteo=1;conteo<numero;conteo++){
        if(conteo%2!=0){
            alert("Impares="+conteo)
            cantidadImpares++
        }
    }
    alert("Cantidad de impares="+cantidadImpares)
}
function NumerosDivisibles () 
{
    var numero=document.getElementById("numero").value
    var cantidadDivisibles=0
    for(var conteo=1;conteo<=numero;conteo++){
        if(numero%conteo==0&&conteo<100){
            alert("Divisibles="+conteo)
            cantidadDivisibles++
        }
    }
    alert("Cantidad de divisibles(solo del 1 al 100)="+cantidadDivisibles)
}
function VerificarPrimo () 
{
    var numero=document.getElementById("numero").value
    var cantidadDivisores=0
    for(var conteo=1;conteo<=numero;conteo++){
        if(numero%conteo==0){
            cantidadDivisores++
        }
    }
    if(cantidadDivisores==2){
        alert(numero+" es un numero primo")
    }
    else{
        alert(numero+" no es un numero primo")
    }
}
function NumerosPrimos () 
{
 	
}
