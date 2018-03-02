function Mostrar()
{
    var mayor=0
    var menor=0    
    var conteo=0
    var importe
    while(conteo<24){
        conteo++
        importe=prompt("Ingrese importe del dia "+conteo)
        importe=parseInt(importe)
        if(importe<0||importe==NaN){
            alert("error")
            conteo--
        }else{
            if(importe>mayor){
                mayor=importe
            }
            else{
                menor=importe
            }
        }
    }
    alert("Importe mayor:"+mayor)
    alert("Importe menor:"+menor)
}
// debo arreglar problema de NaN en importe menor
