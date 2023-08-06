//A class is a template 

class Persona{


    static contadorPersona = 0; 

    email = "Mi correo actual lol"; //if you want to call it you have to instantiate an object 


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



    get apellido(){

        return this._apellido;

    }

    set apellido(y){

        this._apellido = y;

    }

    
    nombreCompleto() {

        return this._nombre + " " + this._apellido;

    }

    
    static saludar() {

        console.log("static function")


    }

    static saludar2(objperson) {

        console.log(objperson.nombre + " " + objperson.apellido);


    }

}



//This is the son of the class Persona and inheritance the attributes 

class empleado extends Persona{

    //It must have the attributes of the constructor father  
    constructor( nombre , apellido , departamento ){
        super( nombre , apellido ); //call the constructor father
        this._departamento = departamento;

    }
    
    get departamento(){


        return this._departamento
    }

    set departamento(z){

        this._departamento = z;

    }

    //Overwriting 
    nombreCompleto() {
        

        return super.nombreCompleto() + " , " + this._departamento;

    }

}


let persona2 = new empleado( "ana" , "lopez" , "Developing" );

//You can use methods of the father class
console.log(persona2.nombre);
console.log(persona2.nombreCompleto())

//Using set method
persona2.apellido = "mora";
console.log(persona2.apellido);


//let persona1 = new Persona( "luis" , "bueno" );
 

//console.log(persona1.nombre); //using get method

//persona1.nombre = "lol"; //using set method 


//console.log(persona1.nombre);



console.log("-------------------------------------------------------------------------------------------------------------------------------------");

Persona.saludar(); //Using the static method
empleado.saludar(); //Inheritance the method 

Persona.saludar2(persona2);


for (Persona.contadorPersona; 
    Persona.contadorPersona <= 10 ;   
    Persona.contadorPersona++ ){

    console.log(Persona.contadorPersona)
}

console.log(persona2.email);











