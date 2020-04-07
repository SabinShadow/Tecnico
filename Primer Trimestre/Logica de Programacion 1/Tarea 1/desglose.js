var billete100 = 100
var billete50 = 50
var billete20 = 20
var billete10 = 10
var billete5 = 5
var billete1 = 1

var moneda50 = 0.50
var moneda25 = 0.25
var moneda10 = 0.10
var modena05 = 0.05
var moneda01 = 0.01

numero = prompt("Ingresa la cantidad de Dinero:","Q")

if (numero>=100){
    billete100=(numero-(numero%100))/100
    document.write(numero + " ")
    numero=numero%100
    document.write(billete100, " Billetes de Q100 </br>")
    document.write(numero, " Resto </br>")
}
if (numero>=50){
    billete50=(numero-(numero%50))/50
    document.write(numero + " ")
    numero=numero%50
    document.write(billete50, " Billetes de Q50 </br>")
    document.write(numero, " Resto </br>")
}
if (numero>=20){
    billete20=(numero-(numero%20))/20
    document.write(numero + " ")
    numero=numero%20
    document.write(billete20, " Billetes de Q20 </br>")
    document.write(numero, " Resto </br>")
}
if (numero>=10){
    billete10=(numero-(numero%10))/10
    document.write(numero + " ")
    numero=numero%10
    document.write(billete10, " Billetes de Q10 </br>")
    document.write(numero, " Resto </br>")
}
if (numero>=5){
    billete5=(numero-(numero%5))/5
    document.write(numero + " ")
    numero=numero%5
    document.write(billete5, " Billetes de Q5 </br>")
    document.write(numero, " Resto </br>")
}
if (numero>=1){
    billete1=(numero-(numero%1))/1
    document.write(numero + " ")
    numero=numero%1
    document.write(billete1, " Billetes de Q1 </br>")
    document.write(numero, " Resto </br>")
}
if (numero>=0.49){
    moneda50=(numero-(numero%0.50))/0.50
    document.write(numero + " ")
    numero=numero%0.50
    document.write(moneda50, " Moneda de Q0.50 </br>")
    document.write(numero, " Resto </br>")
}
if (numero>=0.24){
    moneda25=(numero-(numero%0.25))/0.25
    document.write(numero + " ")
    numero=numero%0.25
    document.write(moneda25, " Moneda de Q0.25 </br>")
    document.write(numero, " Resto </br>")
}
if (numero>=0.09){
    moneda10=(numero-(numero%0.10))/0.10
    document.write(numero + " ")
    numero=numero%0.10
    document.write(moneda10, " Moneda de Q0.10 </br>")
    document.write(numero, " Resto </br>")
}
if (numero>=0.049){
    moneda05=(numero-(numero%0.05))/0.05
    document.write(numero + " ")
    numero=numero%0.05
    document.write(moneda05, " Moneda de Q0.05 </br>")
    document.write(numero, " Resto </br>")
}
if (numero>=0.009){
    moneda01=(numero-(numero%0.01))/0.01
    document.write(numero + " ")
    numero=numero%0.01
    document.write(moneda01, " Moneda de Q0.0 </br>")
    document.write(numero, " Resto </br>")
}

// no pude eliminar el error de los decimales