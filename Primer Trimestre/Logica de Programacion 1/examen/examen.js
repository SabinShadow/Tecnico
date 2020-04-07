let porcionesNecesitadasFresas
let porcionesNecesitadasTres
let porcionesNecesitadasTorta

let disponiblePastelFresas = 5 
let disponiblePastelTres = 8
let disponiblePastelTorta = 2

let precioPastelFresas = 16
let precioPastelTres = 12
let precioPastelTorta = 18

let eleccion
let seguirComprando

while (eleccion != "salir") {
    eleccion = prompt(("Elige que tipo de pastel quieres 1. Fresas con crema 2. Tres Leches 3. Torta chilena, escribe el numero de tu eleccion, o escribe salir si ya no quieres continuar."))
    if(eleccion == "1"){
        alert("Has elegido Fresas con crema, Hay " + disponiblePastelFresas + " porciones disponibles, cada porcion cuesta Q." + precioPastelFresas + ".00 escribe salir si ya no quieres continuar")
        pregunta = prompt("Quieres comprar alguna porcion, escribe si o no")
        if(pregunta == "si"){
            porcionesNecesitadasFresas = parseInt(prompt("Cuantas porciones quieres, escribe salir si ya no quieres continuar"))
        }        
        if(porcionesNecesitadasFresas > disponiblePastelFresas){
            alert("No tenemos tantas porciones disponibles, escriber salir si ya no quieres continuar")
        }else{
            alert("Has comprado " + porcionesNecesitadasFresas + " porcion/es de pastel de Fresas con crema")
        }
        seguirComprando = prompt("quieres seguir comprando, si o salir")        
    }
    if(eleccion == "2"){
        alert("Has elegido Tres Leches, Hay " + disponiblePastelTres + " porciones disponibles, cada porcion cuesta Q." + precioPastelTres + ".00 escribe salir si ya no quieres continuar")
        pregunta = prompt("Quieres comprar alguna porcion, escribe si o no")
        if(pregunta == "si"){
            porcionesNecesitadasTres = parseInt(prompt("Cuantas porciones quieres, escribe salir si ya no quieres continuar"))
        }        
        if(porcionesNecesitadasTres > disponiblePastelTres){
            alert("No tenemos tantas porciones disponibles, escriber salir si ya no quieres continuar")
        }else{
            alert("Has comprado " + porcionesNecesitadasTres + " porcion/es de pastel de Tres Leches")
        }
        seguirComprando = prompt("quieres seguir comprando, si o salir")        
    }
    if(eleccion == "3"){
        alert("Has elegido Torta chilena, Hay " + disponiblePastelTorta + " porciones disponibles, cada porcion cuesta Q." + precioPastelTorta + ".00 escribe salir si ya no quieres continuar")
        pregunta = prompt("Quieres comprar alguna porcion, escribe si o no")
        if(pregunta == "si"){
            porcionesNecesitadasTorta = parseInt(prompt("Cuantas porciones quieres, escribet salir si ya no quieres continuar"))
        }        
        if(porcionesNecesitadasTorta > disponiblePastelTorta){
            alert("No tenemos tantas porciones disponibles, escriber salir si ya no quieres continuar")
        }else{
            alert("Has comprado " + porcionesNecesitadasTorta + " porcion/es de pastel de Torta chilena")
        }
        seguirComprando = prompt("quieres seguir comprando, si o salir")        
    }

}
alert("Cantidad de porciones compradas " + (porcionesNecesitadasFresas+porcionesNecesitadasTres+porcionesNecesitadasTorta)+" Total a pagar Q."+((precioPastelFresas*porcionesNecesitadasFresas)+(precioPastelTres*porcionesNecesitadasTres)+(precioPastelTorta*porcionesNecesitadasTorta)+".00"))
