var productos=["Oreo","Chocolinas","Don Satur","Opera"];
var precios=[700,610,300,500];    

do{

    var opcion= prompt("Seleccione una opción:"+
    "\n1. "+productos[0]+" - "+precios[0]+
    "\n2. "+productos[1]+" - "+precios[1]+
    "\n3. "+productos[2]+" - "+precios[2]+
    "\n4. "+productos[3]+" - "+precios[3]);
    opcion=validarNum(opcion);

}while(opcion==false);

var max=productos.length;


// var opcion=prompt("seleccione opcion");
if(opcion<1||opcion>max){
    alert("Opcion no valida");
}
else{
    var cant=prompt("Ingrese la cantidad deseada");
    cant=validarNum(cant);
    //alert(cant);
    var monto=precios[opcion-1]*cant;
    alert("El monto final es: "+monto);
}



//funcion para validar numeros
function validarNum(num){
    num=Number(num);
    if(isNaN(num)){
        alert("No es un numero valido");
        return false;
    }        
    else{
        return num;
    }            
}


   