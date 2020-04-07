var añoNacimiento = prompt("Escribe el año en que naciste")
var diaNacimiento = prompt("Escribe el dia en que naciste")
var mesNacimiento = prompt("Escribe el mes en que naciste")

var actual = new Date()
var años = actual.getFullYear() - añoNacimiento
var mes = actual.getMonth() - mesNacimiento
var dia = actual.getDay() - diaNacimiento


var resultado = años, mes, dia

document.write("Tu edad es: " + resultado)

