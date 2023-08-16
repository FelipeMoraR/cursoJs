// Events give dynamism to the page 
// onClick event
document.addEventListener("DOMContentLoaded" , function(){

    var boton = document.getElementById("onclick");
    var componente = document.getElementById("title");
    
    console.log(componente.textContent);

    function evento(a){
        componente.textContent = a;
    }
    
    boton.addEventListener('click' , function(){ //This structure causes the "Click" instruction to be done first and then the function
        evento("asdf")
    });
})



    


 
