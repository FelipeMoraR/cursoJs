document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("canvas");
    canvas.width = 600;
    canvas.height = 400;

    const game={

        ctx : null,
        canvas : null,
        radio : 100,
        bolaX: 300,
        bolaY: 200,
        colorBola: "red",
        dx: 3,
        dy: -3,
        limiteDerecha : 0,
        limiteIzquierda: 0,
        limiteArriba: 0,
        limiteAbajo: 0
        

    }
    
    const inicio = () =>{

        game.ctx.lineWidth = game.radio;
        game.ctx.fillStyle = game.colorBola;

        game.limiteDerecha = game.canvas.width - game.radio;
        game.limiteIzquierda = game.radio;
        game.limiteAbajo = game.canvas.height - game.radio;
        game.limiteArriba = game.radio;

    }


   
    const verificar = () => {
        let nbolaX = game.bolaX + game.dx;
        let nbolaY = game.bolaY + game.dy;

        if(nbolaX > game.limiteDerecha){

            game.dx *= -1;
            nbolaX = game.limiteDerecha;

        }

        if(nbolaX < game.limiteIzquierda){

            game.dx *= -1;
            nbolaX = game.limiteIzquierda;

        }
        
        if(nbolaY > game.limiteAbajo){

            game.dy *= -1;
            nbolaY = game.limiteAbajo;

        }

        if(nbolaY < game.limiteArriba){

            game.dy *= -1;
            nbolaY = game.limiteArriba;

        }

        game.bolaX = nbolaX;
        game.bolaY = nbolaY;
        
    }

    const mueve = () => {
        //Cleaning the canvas
        game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
        
        verificar();

        //Updating the new position of the pelotita in the x axis
        game.bolaX += game.dx;

        //Updating the new position of the pelotita in the y axis
        game.bolaY += game.dy;

        game.ctx.beginPath();
        game.ctx.arc(game.bolaX, game.bolaY, game.radio, 0, 2 * Math.PI, true);
        game.ctx.fill();
        

    }


    if (canvas && canvas.getContext) { // Canvas exists in the document and context supports 2D
        game.canvas = document.getElementById("canvas");
        game.ctx = canvas.getContext("2d"); //This must be in lower case

            

        if (game.ctx) {

            inicio();
            mueve();
            setInterval(mueve,1000 / 60);

            
           
            

        } else {

            alert("No soporta la etiqueta canvas");

        }


    }


    
});