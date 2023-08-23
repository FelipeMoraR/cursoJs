document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("canvas");
    canvas.width = 1980;
    canvas.height = 1080;

    var ctx,imagen,archivoSelect;


    if (canvas && canvas.getContext) { // Canvas exists in the document and context supports 2D

        ctx = canvas.getContext("2d"); //This must be in lower case


        if (ctx) {

          

            archivoSelect = document.getElementById("archivo");
            

            
            imagen = new Image();
            imagen.src = "geko.jpg"; 
            
            imagen.onload = function(e){

                procesarImagen();

            }

            
            archivoSelect.onchange = function(e){

                if(archivoSelect.value != ""){

                    imagen.src = archivoSelect.value;
                    

                    imagen.onload = function(e){

                        procesarImagen();

                    }
                }

            }

            function procesarImagen(){
                limpiar();
                ctx.drawImage(imagen, 10, 10);
            }

            function limpiar(){

                ctx.clearRect(250, 10, imagen.width, imagen.height);

            }

            

        } else {

            alert("No soporta la etiqueta canvas");

        }
    }
});