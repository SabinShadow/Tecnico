// 0 es piedra, 1 es papel y 2 es tijera
let eleccionRandom = Math.floor(Math.random()*3) 
let eleccionUsuario = prompt("Elije piedra, papel o tijeras")
//papel
eleccion = eleccionUsuario.toLowerCase()


if (eleccion == "papel" && eleccionRandom == 0){
    document.write("Usuario eligio papel, computadora eligio piedra, el usuario gano")
}
if (eleccion == "papel" && eleccionRandom == 1){
    document.write("Usuario eligio papel, computadora eligio papel, hubo un empate")
}
if (eleccion == "papel" && eleccionRandom == 2){
    document.write("Usuario eligio papel, computadora eligio tijeras, el usuario perdio")
}

//piedra
if (eleccion == "piedra" && eleccionRandom == 0){
    document.write("Usuario eligio piedra, computadora eligio piedra, hubo un empate")
}
if (eleccion == "piedra" && eleccionRandom == 1){
    document.write("Usuario eligio piedra, computadora eligio papel, el usuario perdio")
}
if (eleccion == "piedra" && eleccionRandom == 2){
    document.write("Usuario eligio piedra, computadora eligio tijeras, el usuario gano")
}

//tijeras
if (eleccion == "tijeras" && eleccionRandom == 0){
    document.write("Usuario eligio tijeras, computadora eligio piedra, el usuario perdio")
}
if (eleccion == "tijeras" && eleccionRandom == 1){
    document.write("Usuario eligio tijeras, computadora eligio papel, el usuario gano")
}
if (eleccion == "tijeras" && eleccionRandom == 2){
    document.write("Usuario eligio tijeras, computadora eligio tijeras, hubo un empate")
}
