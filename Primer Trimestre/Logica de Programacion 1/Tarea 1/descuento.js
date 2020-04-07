var numero=prompt("Escribe el precio")

var numeroIngresado=parseInt(numero)

var descuento = .15

var dineroDescontado = numero * descuento

var precioConDescuento = numero - dineroDescontado
document.write("Precio con descuento de temporada del 15% = " + precioConDescuento)