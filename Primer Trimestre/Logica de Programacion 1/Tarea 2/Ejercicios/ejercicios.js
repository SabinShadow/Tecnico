var dia = parseInt(prompt("De cuantos dias quieres que sea tu rutina"))
var rutinaAbdominales = " Abdominales " 
var rutinaLagartijas = " Lagartijas " 
var rutinaSentadilas = " Sentadillas "
var numeroAleatorioAbdominales = Math.floor(((Math.random()*30) + 1) && ((Math.random()*10)+10));
var numeroAleatorioLagartijas = Math.floor(((Math.random()*30) + 1) && ((Math.random()*10)+10));
var numeroAleatorioSentadillas = Math.floor(((Math.random()*30) + 1) && ((Math.random()*10)+10));
var numeroAleatorioTrotar = Math.floor(((Math.random()*60) + 1) && ((Math.random()*30)+30));





for (i=0; i<dia; dia--){
    if(dia % 2 == 0 ){
        document.write (" Dia: "+ dia + "<br>" + numeroAleatorioTrotar + " minutos que debes Trotar " + "<br>")
    } else if (dia % 7 == 0) {
        document.write( " Dia: "+ dia + "<br>" + " Descansa " + "<br>")
    } else{
        document.write(" Dia: "+ dia + "<br>" + numeroAleatorioAbdominales + rutinaAbdominales + "<br>" + numeroAleatorioLagartijas + rutinaLagartijas + "<br>" + numeroAleatorioSentadillas + rutinaSentadilas + "<br>")
    }
}



/*
for (i=1; i<=dia; dia--){
    if((dia / dia == 0) && (dia / 1 == 0) ){
        document.write( "Dia "+ dia + "<br>" + numeroAleatorio + rutinaAbdominales + "<br>" + numeroAleatorio + rutinaLagartijas + "<br>" + numeroAleatorio + rutinaSentadilas)
    } if (dia / 7 == 0) {
        document.write( "Dia "+ dia + "<br>" + " Descansa ")
    } if (dia / 2 == 0) {
        document.write( "Dia "+ dia + "<br>" + numeroAleatorioTrotar + " minutos que debes Trotar ")
    }
}
*/








/*function numeroAleatorioTrotar(numeroMinimo,numeroMayor){
    return Math.floor(Math.random() * (numeroMinimo - numeroMinimo + 1) + numeroMinimo)
}*/

/*if((dia / dia === 0) && (dia / 1 === 0) ){
    
    document.write(numeroAleatorio + rutinaAbdominales + "<br>" + numeroAleatorio + rutinaLagartijas + "<br>" + numeroAleatorio + rutinaSentadilas)
} else if (dia / 2 === 0) {
    document.write("Descansa")
} else {
    document.write(numeroAleatorioTrotar + " minutos que debes Trotar")
}*/