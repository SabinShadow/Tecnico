var añoInicial = parseFloat(prompt("Ingresa un año"))
var añoFinal = 2020

function max(añoInicial,maximo){
    if (max.value.length>=4){
        max.value=max.value.substring(0,maximo)
    }
}

for (añoInicial; añoInicial <= añoFinal; añoInicial ++){
    if (((añoInicial % 4 == 0)&&(añoInicial % 100 !=0)) || (añoInicial % 400 == 0)){
        document.write(añoInicial + " Es Bisiesto")
    }
    else{
        document.write(añoInicial + " No es Bisiesto")
    }
}
