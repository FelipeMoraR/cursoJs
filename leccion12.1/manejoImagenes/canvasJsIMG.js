document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 1400;

    if (canvas && canvas.getContext) { // Canvas exists in the document and context supports 2D

        ctx = canvas.getContext("2d"); //This must be in lower case


        if (ctx) {
            
            var pelota = new Image();

            pelota.src = "pelota_futbol_1.jpg"

            pelota.onload = function(e){

                var patron = ctx.createPattern(pelota, "repeat");
                ctx.fillStyle = patron;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

            }



        } else {

            alert("No soporta la etiqueta canvas");

        }
    }
});