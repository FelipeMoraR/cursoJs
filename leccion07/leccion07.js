
function miPrimeraFuncion( a , b ){

    return a + b;
}


console.log(miPrimeraFuncion( 5 , 10 ));

//alert(miPrimeraFuncion( 5 , 10 ));

//Declaration of a expression function type 

let suma = function( a , b ){ return a + b }


console.log( suma( 1 , 2 ) )


//Function self inoking
// THIS CODE IS GET ME AN ERROR , IDK XD

// (function ( a , b ) {

//     alert("Ejecutando a function " + ( a + b ) );
    
// })(4 , 5);


// Arroy function

const sumarFuncionesFlecha = ( a , b ) => a + b; 
resultado = sumarFuncionesFlecha( 3 , 5 );

alert(resultado);

