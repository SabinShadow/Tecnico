let numero = parseInt(prompt("Ingresa un numero entre 1 y 20"))

let i= ''

if(numero == 0 || numero >21){
    document.write("Tu numero es invalido")
}else{
    for(let i=1; i <= numero; i++ ){
        for(let j=1; j<=numero; j++){
            document.write(i * j + " ")
            "<br>"
        }
        document.write("<br>")
    }
}

