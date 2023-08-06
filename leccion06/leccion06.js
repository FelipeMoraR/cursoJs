//let autos = new Array( "red" , "pink" , "yellow" , 14);
const autos = [ "toyota" , "nissan" , "kia"];
console.log(autos[0]);

//Traveling the array 
for ( let i = 0; i < autos.length; i++){
    console.log(i + " : " + autos[i]);
    
}
console.log(".......................................");
autos[1] = "cambiazo" ;

//Traveling through the modified array 
for ( let i = 0; i < autos.length; i++) {
    console.log(i + " : " + autos[i]);
    
}
console.log(".......................................");
autos.push("Se agrega al final")

//Traveling through the push array 
for ( let i = 0; i < autos.length; i++){
    console.log(i + " : " + autos[i]);
   
}