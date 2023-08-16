


//ACCESSING TO A LABEL OF HTML
document.addEventListener("DOMContentLoaded" , function() {
    var miElemento = document.getElementById("cabecera").textContent; // obtaining only text content by the id
    // Access to an element by its ID
    // Do something with te element
    if (miElemento) {
        console.log(miElemento);
    }
    
})


//MODIFYING TO A LABEL OF HTML
document.addEventListener("DOMContentLoaded" , function() {
    var miElementoM = document.getElementById("cabecera") // obtaining the full element  by the id
    // Access to an element by its ID
    // Do something with te element
    if (miElementoM) {
        miElementoM.textContent = "lol";
        
        console.log(miElementoM.textContent);
    }
    
})



//Get element by tag name (por etiqueta)
document.addEventListener("DOMContentLoaded" , function() {
    var miElementoT = document.getElementsByTagName("p") // Getting a list of all elements with the same tag , you dont have access to the content 
 
    // Do something with te element
    if (miElementoT) {
      
        for(let i = 0 ; i < miElementoT.length; i++){
            console.log(miElementoT[i].textContent); //Individual printing
            console.log("---------------------------");
        }
       
    }
    
})


//Get element by class name (por clases)
document.addEventListener("DOMContentLoaded" , function() {
    var miElementoC = document.getElementsByClassName("clase") // Getting a list of all elements with the same tag , you dont have access to the content 
 
    // Do something with te element
    if (miElementoC) {
      
        for(let i = 0 ; i < miElementoC.length; i++){
            
            console.log(miElementoC[i].textContent); //Individual printing
            console.log("---------------------------");
        }
       
    }
    
})



//Get element by class name (por clases)
document.addEventListener("DOMContentLoaded" , function() {
    var miElementoC = document.getElementsByClassName("clase") // Getting a list of all elements with the same tag , you dont have access to the content 
 
    // Do something with te element
    if (miElementoC) {
      
        for(let i = 0 ; i < miElementoC.length; i++){
            
            console.log(miElementoC[i].textContent); //Individual printing
            console.log("---------------------------");
        }
       
    }
    
})


//Get querySelectorAll
document.addEventListener("DOMContentLoaded" , function() {
    var miElementoAll = document.querySelectorAll("h1.all") // Getting a list of all elements with the same tag and class but you can do it this only with the tag, you dont have access to the content 
 
    // Do something with te element
    if (miElementoAll) {
      
        for(let i = 0 ; i < miElementoAll.length; i++){
            
            console.log("---------------all------------");
            console.log(miElementoAll[i].textContent); //Individual printing
            
        }
       
    }
    
})
