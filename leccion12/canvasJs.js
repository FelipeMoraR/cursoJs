document.addEventListener("DOMContentLoaded", function() {
    
    const canvas = document.getElementById("canvas");
    canvas.width = 600;
    canvas.height = 400;
    
    if(canvas && canvas.getContext) { // Canvas exists in the document and context supports 2D

        ctx = canvas.getContext("2d"); //This must be in lower case
        

        if (ctx) {
            //Setting colours 
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "#000000"; //black
            ctx.lineWidth = 5;
            
            // x , y , w , h
            ctx.fillRect(50 , 50 , 100 , 100);
            ctx.strokeRect(50 , 50 , 100 , 100);

            //Change the color of the background
            ctx.fillStyle = "blue";
            ctx.fillRect(200 , 50 , 100 , 100);
            ctx.strokeRect(200 , 50 , 100 , 100);

            ctx.strokeStyle = "yellow"; 
            ctx.lineWidth = 25;

            //Starting the line
            ctx.beginPath();
            ctx.lineCap = "round";

            //Start X ,Y
            ctx.moveTo(100 , 300);
            //End X , Y
            ctx.lineTo(250, 300);
            //Draw the line
            ctx.stroke();


            ctx.strokeStyle = "black"; 
            //Starting the line
            ctx.beginPath();
            ctx.lineCap = "square";

            //Start X ,Y
            ctx.moveTo(250 , 300);
            //End X , Y
            ctx.lineTo(250, 150);
            //Draw the line
            ctx.stroke();




        } else {
            
            alert("No soporta la etiqueta canvas");

        }
    }
});