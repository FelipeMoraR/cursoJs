let a = 3, b = 2;
let z;
//Addition
z = a + b;
console.log(z);

//Subtraction
z = a - b;
console.log(z);

//Multiplication
z = a * b;
console.log(z);

//Division
z = a / b;
console.log(z);


z = a % b; //Remainder of a division
console.log(z);


z = a ** b; //potency 
console.log(z);

//Pre-increment before number
z = ++a; //increases by 1  
console.log("valor z en Pre-incremeto = " + z);
console.log("valor a en Pre-incremeto = " + a);

z = 0;
//Post-increment after number
z = b++; //increases by 1 but z is not updated
console.log("valor z en Post-incremeto = " + z);
console.log("valor b en Post-incremeto = " + b);





//Pre-decrement before number
z = --a; //disminuye en 1  
console.log("valor z en Post-Decremento = " + z);
console.log("valor a Post-decremento = " + a);

//Post-decrement after number
z = b--; //decreases in 1 but z isn't updated , b assigns the value to z and b decreases but z still being the initial value of b 
console.log("valor z Post-decremento  = " + z);
console.log("valor b Post-decremento = " + b);

console.log("------------------------------------");
let k = 1;

k += 3; // This is the same as k = k + 3
console.log(k);

k -= 3; // This is the same as k = k - 3, but now k is 4 
console.log(k);

k /= 2 // This is the same as k = k / 2, but now k is 1
console.log(k);

k *= 2 // This is the same as k = k * 2, but now k is 0.5
console.log(k);


k %= 2 // This is the same as k = k % 2, but now k is 1
console.log(k);

k = 2;
k **= 2 // This is the same as k = k ** 2, but now k is 1
console.log(k);

console.log("---------------- Behavior of the operations --------------------");

let o = 2 , l = 1 , j = "1";

let y = l == j;

console.log(y); //This is true because with the == doesn't consider the type of data 

y = l === j;
console.log(y); //This consider the type of data ***FALSE***

y = o != l; // If their are distinct ***TRUE***
console.log(y) 

y = j != l; // If their are distinct ***FALSE***
console.log(y); 

y = j !== l; // If their are distinct ***TRUE***
console.log(y);

y = o > l; // If o is higher than l ***TRUE***
console.log(y); 

y = o < l; // If o is menour than l ***FALSE***
console.log(y); 

y = o >= l; // If o is higher or equal than l ***TRUE***
console.log(y); 

y = o <= l; // If o is menour or equal than l ***FALSE***
console.log(y); 

console.log("-------------------------------------- Behavior of conditional if and for with the exercise if the numer is pair or odd ----------------------------------------------------------------------");



for (a = 0; a <= 10; ++a)

if( a % 2 == 0){
    console.log("ES PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR");
}
else{
    console.log("ES IMPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR");
}

console.log("---------------------------------------------- Behavior of numer with the size of numbers --------------------------------------------------------------")


for (a = 0; a <= 19; ++a)

if( a >=18){
    console.log("ES ADULTOOO");
}
else{
    console.log("ES CABRO CHICO");
}

console.log("-------------------------------------------- Behavior of conditonal AND ----------------------------------------------------------------------------------------------------")

a = 0;
let valMin = 0 , valMax = 10;

if( a >= valMin && a <= valMax ){ // && means AND 
    console.log("Esta en el rango");
}
else{
    console.log("No esta en el rango");
}

console.log("-------------------------------------------------Behavior of conditonal Or-----------------------------------------------------------")


let vacaciones = false , diaDescanso = true ;

if(vacaciones || diaDescanso ){ // || means Or 
    console.log("Entro al juego");

} 
else {
    console.log("No entro al juego");
}

console.log("-------------------------------------------------Behavior of conditonal Ternaries (IF and ELSE in one line)-----------------------------------------------------------")

let resultado = ( 10 > 2 ) ? "True " : "False";
console.log(resultado);


console.log("-------------------------------------------------Behavior of transformation from string to number -----------------------------------------------------------")

let miNumero = "18";
//console.log(typeof miNumero);

let edad = Number(miNumero)
console.log(typeof edad);

if ( edad >= 18 ) {
    console.log("He can vote")
} else {
    console.log("He can't vote")
}

let canVote = ( edad >= 18 ) ? "He can vote" : "He can't vote" // This is the same as the conditional if , you havo to copy the parenthesis and paste it in this way 
console.log(canVote)



console.log("-------------------------------------------------Behavior of Presedural  -----------------------------------------------------------")

let x = 5;
let x1 = 5;
let x2 = ++x + x1--;
console.log(x)
console.log(x1)
console.log(x2)