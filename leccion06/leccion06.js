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
console.log(".......................................");
//Delete the last element of the array
const frutas = ['manzana', 'pera', 'plátano'];
const ultimoElemento = frutas.pop();
console.log(ultimoElemento); // Result: 'plátano'
console.log(frutas);

console.log(".......................................");
//Delete the first one 
const frutas2 = ['manzana', 'pera', 'plátano'];
const primerElemento = frutas2.shift();
console.log(primerElemento); // Resultado: 'manzana'
console.log(frutas2);

//Add elements in the first place 
frutas2.unshift('manzana', 'perro');
console.log(frutas2); // Resultado: ['plátano', 'manzana', 'pera']

console.log(".......................................");

//Conbine two arrays and makes a new one 
const array1 = [1, 2];
const array2 = [3, 4];
const combinado = array1.concat(array2);
console.log(combinado); // Resultado: [1, 2, 3, 4]

console.log(".......................................");

const frutas3 = ['manzana', 'pera', 'plátano', 'naranja'];
frutas3.splice(2, 1, 'uva'); //The 1 indicates how many elements will be deleted
console.log(frutas3); // Resultado: ['manzana', 'pera', 'uva', 'naranja']


console.log(".......................................");

//For each element in the array fruta will started
const frutas4 = ['manzana', 'pera', 'plátano'];
frutas4.forEach(fruta => console.log(fruta));

console.log("Other for");
for(let i = 0; frutas4.length > i; i++){
    
    console.log(frutas4[i]);

}

console.log(".......................................");

const numeros = [1, 2, 3];
const duplicados = numeros.map(numero => numero * 2);
console.log(duplicados); // Resultado: [2, 4, 6]

console.log(".......................................");
const numeros2 = [1, 2, 3, 4, 5];
const pares = numeros2.filter(numero => numero % 2 === 0);
console.log(pares); // Resultado: [2, 4]