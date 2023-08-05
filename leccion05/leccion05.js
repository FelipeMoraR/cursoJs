console.log("while cycles")

let text  = "";
let i = 0;

while ( i < 10 ) { 
    text += "<br> The number is " + i; // This is the same as text = text + "<br> The number is " + i;
    i++;
}
console.log(text)
document.getElementById("demo").innerHTML = text;


do { // Start this first al later the conditional while, if the conditional isn't true the do part will start anyways 
    text += "He number is " + i;
    i++;
    
}
while (i < 10);


for (let contador = 0 ; contador < 4 ; contador++ ){

    console.log(contador);


}



