
console.log("True and false on the if sentences")

let condicion = false;

if (condicion){

    console.log("It is true");

} else {

    console.log("It is false");

}

console.log("----------------------------------------- Exercise of IF ,ELIF and ELSE -------------------------------------------------------------------")

let mes = 5;
let estacion;

if ( mes == 12 || mes == 1 || mes == 2 || mes == 3){

    estacion = "Verano";

} else if ( mes == 4 || mes == 5 || mes == 6 ){

    estacion = "Otono";

} else if ( mes == 7 || mes == 8 || mes == 9 ){

    estacion = "Invierno";

} else if ( mes == 10 || mes == 11 ){

    estacion = "Primavera";
} else {

    console.log("Error")

}

console.log(estacion)


console.log("----------------------------------------- Switch / Alternative of elseif -------------------------------------------------------------------")

let numero = 1;
let numeroTexto = "Valor desconocido";

switch (numero){

    case 1: 
        numeroTexto = "Numero 1"; 
        break;
    case 2: // if numero === 2
        numeroTexto = "Numero 2";
        break;
    default:
        numeroTexto = "Caso no encontrado";

}



