let numero1 = prompt("Ingresa el Primer numero")
let numero2 = prompt("Ingresa el Segundo numero")
let numero3 = prompt("Ingresa el Tercer numero")



let arreglo = [numero1, numero2, numero3];

document.write(arreglo.sort(function(a,b){
    return a - b
}))


/*function ordenarNumeros(a,b){
    return a-b;
}

total.sort(ordenarNumeros);
console.log(total)*/