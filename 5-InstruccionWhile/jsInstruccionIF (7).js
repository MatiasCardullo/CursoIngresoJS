function Mostrar()
{
//tomo la edad  
var edad,estadoCivil
    edad=document.getElementById("edad").value
    estadoCivil=document.getElementById("estadoCivil").value
    if(edad<18&&estadoCivil!="Soltero")
    {
        alert("eres muy pequeño para no ser soltero")
    }
}//FIN DE LA FUNCIÓN