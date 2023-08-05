let x = 10;

let nombre = "Luis"

//An object can have a function in its structure
let persona = {

    nombre : "Luis",
    apellido : "Mora",
    email : "sdaffsd@gmail.com",
    edad : 28, 
    nombreCompleto : function () {
        
        return this.nombre + ' ' + this.apellido 

    }

}


//This is the command to access the object called persona
console.log(persona.email);
console.log(persona.nombreCompleto());

//other way to declare a object
let persona2 = new Object();

//Adding propeties 
persona2.nombre = "Carlos";
persona2.apellido = "Mora";

console.log(persona2.apellido);

console.log("----------------------------------------------------------------------");

//Other way to access to an object
console.log(persona['apellido']);

console.log("----------------------------------------------------------------------");

//For in 
console.log(" CICLO FOR ");
for (x in persona2) {
   
    
    console.log(persona2[x]);

}


console.log("----------------------------------------------------------------------");


persona2.telefono = "3123123";

for (x in persona2) {
   
    
    console.log(persona2[x]);

}


console.log("----------------------------------------------------------------------");



delete persona2.telefono;

for (x in persona2) {
   
    
    console.log(persona2[x]);

}


console.log("----------------------------------------------------------------------");


let personaArray = Object.values(persona2);
console.log(personaArray)

console.log("----------------------------------------------------------------------");


console.log("Function Get");



let persona3 = {

    nombre : "Luis",
    apellido : "Mora",
    email : "sdaffsd@gmail.com",
    edad : 28, 
    get nombreCompletoGet() {
        
        return this.nombre + ' ' + this.apellido 

    }

}

console.log(persona3.nombreCompletoGet);



console.log("----------------------------------------------------------------------");



console.log("Function Set");



let personaSet = {

    nombre : "Luis",
    apellido : "Mora",
    email : "sdaffsd@gmail.com",
    edad : 28, 
    idioma : "es",

    get lang(){

        return this.idioma.toUpperCase();

    },

    set lang(x){
        
        this.idioma = x.toUpperCase(); 
        
    },


    get nombreCompletoGet() {
        
        return this.nombre + ' ' + this.apellido 

    }

}

console.log(personaSet.lang);

personaSet.lang = 'en';

console.log(personaSet.lang);

console.log(personaSet);



console.log("----------------------------------------------------------------------");


console.log("Contructor")

//Is for save more users of the object

function PersonaFunction(nombre , apellido , email) {
    //this.nombreC is a local atribute
    this.nombreC = nombre;
    this.apellidoC = apellido;
    this.emailC = email;
    
    this.fullName = function () {
        return this.nombreC + " " + this.apellidoC;
    }
    

}

//This is prototype 
PersonaFunction.prototype.telefonoC = "17234577132";

//Creating an object
let padre = new PersonaFunction("Luis" , "Mora" , "ASDGFS@gmail.com" );
console.log(padre.telefonoC);




let madre = new PersonaFunction("Maria" , "Recabal" , "2sadf@gmail.com" );
madre.telefonoC = "123123213"
console.log(madre.telefonoC);



console.log("----------------------------------------------------------------------");


console.log("Call")

//I want to reutilize the function on personaB

let personaA = {

    nombre : "Luis",
    apellido : "Mora",
    email : "sdaffsd@gmail.com",
    edad : 28, 
    nameGood : function () {
        return this.nombre + " " + this.apellido;
    }

}

let personaB = {

    nombre : "Felipe",
    apellido : "Recabal",
    

}

console.log(personaA.nameGood());

//Here we are using the call method for add to personaB the function called nameGood, so we are using the parameters of personaB and using the function of personaA
console.log(personaA.nameGood.call(personaB));



console.log("----------------------------------------------------------------------");


console.log("Call 2")



let personaC = {

    nombre : "Luis",
    apellido : "Mora",
    email : "sdaffsd@gmail.com",
    edad : 28, 
    nameGood : function (profesion , telefono) {
        return profesion + "; " + this.nombre + " " + this.apellido + ", " + telefono;
    }

}

let personaD = {

    nombre : "Felipe",
    apellido : "Recabal",
    

}

console.log(personaC.nameGood("SexSimbol" , 55555 ));

//The same of up but the function have 2 new parameters . so the first method is the CALL and we are giving it , the two parameters are the of the function ( profesion , telefono)
console.log(personaC.nameGood.call(personaD , "Ingeniero" , "555555"));