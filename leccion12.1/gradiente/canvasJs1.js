document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 1400;

    if (canvas && canvas.getContext) { // Canvas exists in the document and context supports 2D

        ctx = canvas.getContext("2d"); //This must be in lower case


        if (ctx) {
            
            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

            gradient.addColorStop(0, "green");
            gradient.addColorStop(0.45, "white");
            gradient.addColorStop(0.55, "red");
            gradient.addColorStop(1, "cyan");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);


        } else {

            alert("No soporta la etiqueta canvas");

        }
    }
});