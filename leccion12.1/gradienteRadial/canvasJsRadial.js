document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 1400;

    if (canvas && canvas.getContext) { // Canvas exists in the document and context supports 2D

        ctx = canvas.getContext("2d"); //This must be in lower case


        if (ctx) {
            
          x1 = canvas.width / 2;
          y1 = canvas.height / 2;
          r1 = 10;


          x2 = canvas.width / 2;
          y2 = canvas.height / 2;
          r2 = 300;

          var gradiente = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);


          gradiente.addColorStop(0, "pink");
          gradiente.addColorStop(0.15, "yellow");
          gradiente.addColorStop(0.35, "white");
          gradiente.addColorStop(0.65, "green");
          gradiente.addColorStop(1, "red");

          ctx.fillStyle = gradiente;
          ctx.fillRect(0, 0, canvas.width, canvas.height);



        } else {

            alert("No soporta la etiqueta canvas");

        }
    }
});