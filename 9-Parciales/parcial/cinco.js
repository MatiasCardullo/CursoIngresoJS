function Mostrar()
{
    var dia=prompt("Ingrese un dia de la semana")
    switch(dia){
    case "sabado":
    case "domingo":
        alert("Es fin de semana")
    default:
        alert("a trabajar!!!")
    }
}
