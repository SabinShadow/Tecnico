var numero= prompt("Escribe un numero")
var tabla= parseInt(numero)
var cantidad = 10

for(var i=1; i<=cantidad; i++){
    document.write(tabla+" X "+i+" = "+(tabla*i)+"<br>");
}