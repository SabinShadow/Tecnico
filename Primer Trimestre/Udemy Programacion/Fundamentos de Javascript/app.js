//let nombre,  mensaje

//nombre = "Juan Pablo"
//mensaje = "Y entonces dije 'Buen Curso!!'"

//console.log(nombre)

/*const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja', 'Zanahoria']

frutas.sort();
//console.log(frutas)

arreglo1 = [3,9,95,951,86,81,12,84,17];

arreglo1.sort(function(x,y){
    return y - x
});
//console.log(arreglo1);


const numeros = [1,2,3]
numeros[0] = 5;
numeros.push(6);
*/
//console.log(numeros)



// crea objeto
/*const persona = {
    nombre: 'Melvin',
    apellido: 'Uyu',
    profesion: 'Programador',
    edad: 30,
    musica:['Rock','Electronica'],
    hogar:{
        ciudad: 'Guatemala',
        pais: 'Guatemala'
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
}*/
//console.log(persona.nacimiento());



/*const autos = [
    {modelo: 'Mustang', motor: 4.0},
    {modelo: 'Camaro', motor: 4.5},
    {modelo: 'Mazda', motor: 2.5},
]
*/
/*for(let i = 0; i < autos.length; i++){
    console.log(`${autos[i].modelo} ${autos[i].motor}`)
}*/
/*
autos[0].modelo = 'Audi'

//console.log(autos)

function sumar(a,b){
    return a + b;
}
 */ 

//suma = sumar(15);

//console.log(suma)

/*function saludar(nombre = 'Visitante'){
    if(typeof nombre ==='undefined'){nombre = 'Visitante'}
    return `hola ${nombre}`
}*/

//saludo = saludar();

//console.log(saludo)

/*const saludar = function(nombre = 'Visitante', edad = 20, trabajo = 'Developer'){
    return `hola tienes ${edad}, profesion ${trabajo} y the llamas ${nombre}`;
}

console.log(saludar('Melvin'));*/


/*(function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`)
})('Javascript')*/

/*const musica = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion id ${id}`)
    },
    pausar: function(){
        console.log(`Pause la Musica`)
    }
}*/

//los metodos pueden crearse fuera del objeto
/*musica.borrar = function(id){
    console.log (`Borrando la cancion con el ID: ${id}`)
}

musica.reproducir(30);
musica.pausar();*/

//Funcion que no existe
/*try{
    algo()
}catch(error){
    console.log (error)
}finally{
    console.log ('No me importa, igual me ejecuto')

}

function obtenerClientes(){
    console.log('Descargando...');
    setTimeout(function(){
        console.log('Completo')
    },3000);
}
obtenerClientes()*/


/*const diaHoy = new Date()
//let navidad2020 = new Date('12-25-2020')

let valor;
//mes
valor = diaHoy.getMonth();
valor = diaHoy.getDay();

valor = diaHoy.getFullYear();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();

valor = diaHoy.getTime();

valor = diaHoy.setFullYear(2025);
valor = diaHoy.getFullYear()

console.log(valor)*/

/*const edad = 19;

if (edad != 18){
    console.log('Si puedes entrar al Sitio')
}else {
    console.log('No puedes entrar al sitio')
}*/

/*let puntaje;

if (puntaje){
    console.log(`El puntaje fue de ${puntaje}`)
} else {
    console.log(`No hay puntaje`)
}*/

/*let efectivo = 500;
let totalCarrito = 300;

if (efectivo > totalCarrito){
    console.log('Pago Correcto');
} else {
    console.log('Fondos Insuficientes')
}*/


/*let hora = 8
if (hora > 0 && hora <= 10){
    console.log('Buenos Dias')
} else if (hora > 10 && hora <=18){
    console.log('Buenas Tardes')
} else if (hora > 18 && hora <=24){
    console.log('Buenas Tardes')
}else {
    console.log('Hora no valida')
}*/

/*let puntaje = 100
if (puntaje < 150){
    console.log('Puntaje < 150')
}else if (puntaje < 150){
    console.log('Puntaje < 200')
}*/

/*let efectivo = 300,
    credito = 300,
    disponible = efectivo + credito,
    totalCarrito = 500;

if (totalCarrito < efectivo || totalCarrito < credito){
    console.log('Puedo Pagar')
} else if (totalCarrito < disponible){
    console.log('Pague con Ambos')
}else {
    console.log('No Puedo Pagar')
}*/

/*const logueado = true;
console.log(logueado === true ?'Si se logueo' : 'Nosse logueo')*/

/*const metodoPago = 'cheque'

switch(metodoPago){
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`)
        break;
    case 'cheque':
        console.log(`El usuario pago con ${metodoPago}`)
        break;
    case 'tarjeta':
        console.log(`El usuario pago con ${metodoPago}`)
        break;
    default:
    console.log(`Metodo de pago no aceptado`)
            break;    
}*/


/*let mes;
switch(new Date().getMonth()){
    case 0:
        mes = 'Enero'
        break;
    case 1:
        mes = 'Febrero'
        break;
    case 2:
        mes = 'Marzo'
        break;
    case 3:
        mes = 'Abril'
        break;
    case 4:
        mes = 'Mayo'
        break;
    case 5:
        mes = 'Junio'
        break;
    case 6:
        mes = 'Julio'
        break;
    case 7:
        mes = 'Agosto'
        break;
    case 8:
        mes = 'Septiembre'
        break;
    case 9:
        mes = 'Octubre'
        break;
    case 10:
        mes = 'Noviembre'
        break;
    case 11:
        mes = 'Diciembre'
        break;
}

console.log(`Este mes es ${mes}`)*/


//For Loops

/*for(let i = 0; i<10; i++){
    if (i == 5){
        console.log('Voy en el 5')
        continue;
    }
    console.log(`${i}`)
}*/

/*const arregloProductos = ['Camisa', 'Boleto', 'Guitarra', 'Disco']

console.log(arregloProductos.length)

for (let i = 0; i < arregloProductos.length; i++){
    console.log(`Tu Producto ${arregloProductos} fue agregado`)
}*/

/*for(let i = 0; i<10; i++){
    if (i % 2 == 0){
       console.log(`El numero ${i} es Par`)
    }else{
        console.log(`El numero ${i} es Impar`)
    }
    
}*/

/*let i = 0

while (i < 100){
    console.log(`Numero: ${i}`);
    if ( i === 5){
        console.log('Cinco');
        i++;
        continue;
    }
    i++;
}*/

/*const musica = ['Cancion 1', 'Cancion 2', 'Cancion 3'];
let i = 0
while (i < musica.length){
    console.log(`Reproduciendo la cancion: ${musica[i]}`)
    i++
}*/

/*let i = 0;

do {
    console.log(`Numero: ${i}`)
    i++
} while (i < 10)*/


//const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender JavaScript'];

//For
/*for(let i = 0; i < pendientes.length; i++){
    console.log(pendientes[i])
}

console.log(pendientes);*/

//forEach

/*pendientes.forEach( function(pendiente, index){
    console.log(`${index}: ${pendiente}`)
});*/

//Map para recorrer un arreglo de objetos

/*const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Guitarra'},
    {id: 4, producto: 'Disco'}
];

const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
})

console.log(nombreProducto)*/

/*const automovil = {
    modelo: 'Viper',
    motor: 3.0,
    anio: 2015,
    marca: 'Dodge'
}

for (let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`)
}

console.log(automovil)*/


/*const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 135, 968, 155]);
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', ' desarrollador web')*/

//Entries iterador
/*entries ciudades
for(let entrada of ciudades.entries()){
    console.log(entrada)
}*/
/*
for(let entrada of ordenes.entries()){
    console.log(entrada)
}*/

/*//entries para el map
for(let entrada of datos.entries()){
    console.log(entrada)
}*/

/*const mensaje = 'Aprendiendo Javascript';

for (let letra of mensaje){
    console.log(letra);
}*/

/*const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces){
    console.log(enlace.href)
}*/


/*const nombre = prompt()

console.log(`Bienvenido ${nombre}`)

if (confirm('Eliminar')){
    console.log('Eliminado');
}else {
    console.log('No paso nada')
}*/

/*let altura,
    anchura;

    altura = window.innerHeight;
    anchura = window.innerWidth;

    console.log(altura);
    console.log(anchura);*/


/*let ubicacion;

ubicacion = window.location;
//redireccionar con javascrip//window.location.href = 'http://twitter.com'
console.log(ubicacion)*/

//scope
