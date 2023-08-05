//A class is a template 

class Persona{

    constructor( nombre , apellido ){
        //Class atributes 
        this._nombre = nombre;
        this._apellido = apellido;


    }

    get nombre(){

        return this._nombre;

    }

    set nombre(x){

        this._nombre = x;

    }


}


let persona1 = new Persona( "luis" , "bueno" );
 

console.log(persona1.nombre); //using get method

persona1.nombre = "lol" //using set method 


console.log(persona1.nombre);






