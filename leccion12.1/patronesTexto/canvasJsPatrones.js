document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("canvas");
    canvas.width = 1980;
    canvas.height = 1080;

    if (canvas && canvas.getContext) { // Canvas exists in the document and context supports 2D

        ctx = canvas.getContext("2d"); //This must be in lower case


        if (ctx) {

          

            var cypher = new Image();

            cypher.src = "1244843.jpg"

            cypher.onload = function (e) {

                procesarImagen()

            }

            function procesarImagen() {
                // Calcular la relación de aspecto de la imagen
                const aspectRatio = cypher.width / cypher.height;

                // Calcular el ancho y alto de la imagen en función del canvas
                let imgWidth = canvas.width;
                let imgHeight = imgWidth / aspectRatio;

                // Si la altura de la imagen es mayor que la altura del canvas, ajustar en consecuencia
                if (imgHeight > canvas.height) {
                    imgHeight = canvas.height;
                    imgWidth = imgHeight * aspectRatio;
                }

                // Centrar la imagen en el canvas
                const x = (canvas.width - imgWidth) / 2;
                const y = (canvas.height - imgHeight) / 2;

                // Dibujar la imagen en el canvas con las dimensiones calculadas
                ctx.drawImage(cypher, x, y, imgWidth, imgHeight);

                ctx.font = "8em Verdana";
                ctx.lineWidth = 1.0;
                ctx.fillStyle = "blue";
    
                ctx.strokeStyle = "Yellow";
    
                //Sombras
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = 5;
                ctx.shadowOffsetY = -5;
                ctx.shadowBlur = 10;
    
                ctx.fillText("Cypher", 740 , 150)
                ctx.strokeText("Cypher", 740 , 150)
                ctx.fillRect(0, 0 , 0, 0);


            }

            

        } else {

            alert("No soporta la etiqueta canvas");

        }
    }
});