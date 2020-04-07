var palabra1 = prompt("Ingresa la primer Palabra")
var palabra2 = prompt("Ingresa la segunda Palabra")

var largoPalabra1 = palabra1.length
var largoPalabra2 = palabra2.length

if (largoPalabra1 > 10 && largoPalabra2 > 10){
    document.write( largoPalabra1 + largoPalabra2)
} else if(largoPalabra1 <= 10 || largoPalabra2 <= 10){
    document.write( largoPalabra1 * largoPalabra2)
}