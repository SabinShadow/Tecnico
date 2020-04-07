numero1 = parseInt(prompt("Ingresa un numero"))
numero2 = parseInt(prompt("Ingresa un numero"))

if (numero1 > numero2){
    document.write("El mayor es " + numero1 + " la resta es " + numero2 + " el resultado es " + (numero1 - numero2))
}else if(numero2 > numero1){
    document.write("El mayor es " + numero2 + " la resta es " + numero1 + " el resultado es " + (numero2 - numero1))
}else{
    document.write("Los numeros son iguales")
}