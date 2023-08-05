//string data type 
var nombre = "Luis";
console.log(nombre);


//number data type
var numero = 5000;
console.log(numero);


//object data type
var objeto = {
    nombre : "Luis",
    apellido : "Mora",
    telefono : "37127321"
}
console.log(objeto);

//bolean data type
var bandera = false;

//function data type
function miFuncion(){}

//class data type
class persona{

    constructor(nombre , apellido){
        this.nombre = nombre,
        this.apellido = apellido
    }

    static leseo3(nombre , apellido){
        return nombre + ' ' + apellido
    }

}

//underfiend data type, var is global
var x;

//this is underfiend too
var x = undefined;

//null data type, a null variable it's considerate like an objetc type
var a = null;

//Arrays data type
var autos = [ 'bmw' , 'audi' , 'volvo' ];
console.log(autos);

//Empty string data type
var z = "";

//let data type , it's used to work in a short range (scope) in the block or declaration, is for local use 
let variableLet;
variableLet = "Esta es mi variable Let"
console.log(variableLet);

//const data type
const variableCons = "Esta es una constante"
//with this we must have an error
variableCons = "Intento de modificacion"
console.log(variableCons)



//This code work for know what kind of data is the variable
console.log(typeof nombre);
console.log(typeof numero);
console.log(typeof objeto);
console.log(typeof bandera);
console.log(typeof miFuncion);
console.log(typeof persona);
console.log(typeof x);
console.log(typeof a);
console.log(typeof autos);
console.log(typeof z);

//concatenate variables

var apellido = 'Mora';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);


//in this case the numbers are being put as strings 
var numberString = nombre + 2 + 4;
console.log(numberString);

//in this case , thanks to the parentheses , the numbers are added
var numberString2 = nombre + (2 + 4);
console.log(numberString2);

//in this case the numbers are added but they are not in a parentheses
var numberString3 = 2 + 4 + nombre;
console.log(numberString3);

//how to get a value from an array
var leseo = autos[0];
console.log(leseo)

var leseo2 = objeto.telefono;
console.log(leseo2)

var leseo3 = persona.leseo3(this.nombre, this.apellido);
console.log(leseo3)

// **** IMPORTANT ****
// function xd(){
//     if (true){
//         let lol = "uwu";
//         console.log(lol)
//     }
//     console.log(lol) This will be an error because the variable let it is working only in the conditional if , out of that it doesn't exist

//     if (true){
        
//         var lol2 = "owo";

//         console.log(lol2)
//     }
    
//     console.log(lol2)
   
    
// }