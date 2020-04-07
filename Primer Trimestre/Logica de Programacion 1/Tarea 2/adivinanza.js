var numeroAleatorio = Math.floor(Math.random()*100 + 1);
var numeroSeleccionado 
var intentos = 1


for(intentos; intentos<8; intentos++){
    numeroSeleccionado = parseInt(prompt("Adivina el numero entre 1 y 100" + " Intento " + intentos))
   
     if (numeroSeleccionado > numeroAleatorio){
        alert(numeroSeleccionado +" es superior ")
    } else {numeroSeleccionado < numeroAleatorio
        alert(numeroSeleccionado + " es inferior ")   
    }
}

if (numeroSeleccionado == numeroAleatorio){
    alert("Felicidades adivinaste el numero "+(intentos)+ "intentos.")
} else{
    ("Se te acabaron los intentos, suerte en tu proximo juego")
}