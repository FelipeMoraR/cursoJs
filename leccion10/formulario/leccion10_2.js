


document.addEventListener("DOMContentLoaded" , function() {
    
    function mostrarValores(){

        let formulario = document.getElementById("formulario");
        let texto = "";
        
        for (let i = 0; i < formulario.elements.length; i++) {

            texto += formulario.elements[i].value + '<br/>';
        }
    
        document.querySelector('.valores').innerHTML = texto; //.valores is like this because valores is a class of css so that is the way to call it , but if you want to call it by its id you have tu put a # instead a .
    }

    let mostrarButton = document.getElementById('mostrarButton');
    mostrarButton.addEventListener('click', mostrarValores);
    
})



//Other way to access a form
document.addEventListener("DOMContentLoaded" , function() {
    
    function mostrarValores2(){

        let formulario2 = document.forms["formulario2"];
        let texto2 = "";
        
        let nombre = formulario2["nombre2"];
        let apellido = formulario2["apellido2"];
        
        texto2 = nombre.value + "<br/>" + apellido.value;



        document.querySelector('.valores2').innerHTML = texto2; //.valores is like this because valores is a class of css so that is the way to call it , but if you want to call it by its id you have tu put a # instead a .
    }

    let mostrarButton2 = document.getElementById('mostrarButton2');
    mostrarButton2.addEventListener('click', mostrarValores2);
    
})



//accessing and changing the h1
document.addEventListener("DOMContentLoaded" , function() {

    let cambiarH1 = document.getElementById('cambioH1'); //accessing to the button

    function cambioH1(){


        let formularioh1 = document.forms["formularioh1"];
        let nuevoValor = formularioh1["cambio"];

        var contenido = document.getElementById("tituloChulo");
       
        contenido.textContent = nuevoValor.value;

        console.log(contenido.textContent);
     
    }



    
    cambiarH1.addEventListener('click', cambioH1);
    
})


//accessing and changing the imagen
document.addEventListener("DOMContentLoaded" , function() {

    let cambiarImg = document.getElementById('cambioimagen'); //accessing to the button

    var contenido = document.getElementById("imagen");
    let imagenOriginalSrc = contenido.src;


    function cambioImg(){

        if (contenido.src === imagenOriginalSrc) {
            // Si la imagen actual es la original, cambiar a la nueva imagen
            contenido.src = "images2.jpg";
        } else {
            // Si la imagen actual es la nueva imagen, volver a la original
            contenido.src = imagenOriginalSrc;
        }

    }



    
    cambiarImg.addEventListener('click', cambioImg);
    
})




//accessing and changing the imagen
document.addEventListener("DOMContentLoaded" , function() {

    let cambiarImg = document.getElementById('cambioColor'); //accessing to the button

    var contenido = document.getElementById("tituloChulo");
    


    function cambioColor(){

        
        if(contenido.style.color === "red"){
            contenido.style.color = "black";
        }
        else{
            contenido.style.color = "red";
        }
    }



    
    cambiarImg.addEventListener('click', cambioColor);
    
})