// Events give dynamism to the page 
// onClick event
//DOMContentLoaded this is like a onload because this event start when the DOM is complete loaded
document.addEventListener("DOMContentLoaded" , function(){

    var boton = document.getElementById("onclick");
    var componente = document.getElementById("title");
    var pTitulo = componente.textContent;

    function evento(a){
        

        if( componente.textContent === a){
            componente.textContent = pTitulo;
        }
        else{
            componente.textContent = a;
        }
    }
    
    boton.addEventListener('click' , function(){ //This structure causes the "Click" instruction to be done first and then the function
        evento("asdf")
    });
})


// onLoad event 
//it waits to load all resources of the page, ALL, the dom , images , etc. It is slower than DOMContentLoaded
window.onload = function() {
    var boton2 = document.getElementById("onclick");
    var componente2 = document.getElementById("title");
    var pTitulo2 = componente2.textContent;

    function evento2(a) {
        if (componente2.textContent === a) {
            componente2.textContent = pTitulo2;
        } else {
            componente2.textContent = a;
        }
    }

    boton2.addEventListener('click', function() {
        evento2("asdf");
    });
};

//onChange
document.addEventListener("DOMContentLoaded" , function(){
    
    var selector = document.getElementById("selector");
    var mostrarSelector = document.getElementById("mostrarSelector");
    
    console.log(selector.value); //Gives the first option
    console.log(selector.textContent); //Gives all the options 

    mostrarSelector.textContent = "Opción seleccionada: " + selector.value;

    selector.addEventListener("change", function() {

        var opcionSeleccionada = selector.value;
        
        console.log(opcionSeleccionada);

        mostrarSelector.textContent = "Opción seleccionada: " + opcionSeleccionada;
        
    })
   

})


//onMouseOver , onMouseOut
document.addEventListener("DOMContentLoaded" , function(){

    var titulo = document.getElementById("onMouse");

    titulo.addEventListener("mouseover" , function(){
        titulo.style.color = "red";
    })

    titulo.addEventListener("mouseout" , function(){
        titulo.style.color = "black";
    })


})


//onMouseDown , onMouseUp
document.addEventListener("DOMContentLoaded" , function(){

    var titulo = document.getElementById("onMouseDown");

    titulo.addEventListener("mousedown" , function(){
        titulo.style.color = "red";
    })

    titulo.addEventListener("mouseup" , function(){
        titulo.style.color = "black";
    })


})


//onFocus , onBlur
document.addEventListener("DOMContentLoaded" , function(){

    var input = document.getElementById("onFocusBlur");

    input.addEventListener("focus" , function(){
        input.style.backgroundColor = "red";
    })

    input.addEventListener("blur" , function(){
        input.style.backgroundColor = "white";
    })


})



//adEventListener
document.addEventListener("DOMContentLoaded" , function(){

    var input = document.getElementById("onFocusBlur");

    input.addEventListener("focus" , function(){
        input.style.backgroundColor = "red";
    })

    input.addEventListener("blur" , function(){
        input.style.backgroundColor = "white";
    })


})

    


 
