var numeroUno = parseInt(prompt("Ingresa el primer numero"))
var operacion = (prompt("Ingresa el simbolo de la operacion que desees +, - , /, *"))
var numeroDos = parseInt(prompt("Ingresa el segundo numero"))


if (operacion == "+"){
    var resultado = numeroUno + numeroDos
}
if (operacion == "-"){
    var resultado = numeroUno - numeroDos
    }
if (operacion == "/"){
    var resultado = numeroUno / numeroDos
        }
if (operacion == "*"){
    var resultado = numeroUno * numeroDos
            }
alert(resultado)