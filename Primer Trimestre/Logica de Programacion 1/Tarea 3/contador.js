let contador = 0
let total = 5200

while (total != 0) {
    venta = parseInt(prompt("Cuantos garrafones quieres"))
    if (venta >= 6){
        document.write("No te podemos vender mas de 5 garrafones")
        console.log("No te podemos vender mas de 5 garrafones")
    }else{
        document.write("Te vendimos " + venta +" garrafones")
        console.log("Te vendimos " + venta +" garrafones")
    }
    while (total !=0) {
        document.write("Has vendido esta cantida de garrafones " + venta + "quedan estos garrafones disponibles " + (total - venta))
        console.log("Has vendido esta cantida de garrafones " + venta + "quedan estos garrafones disponibles " + (total - venta))
    }
    
}