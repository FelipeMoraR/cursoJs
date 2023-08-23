document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 1400;

    if (canvas && canvas.getContext) { // Canvas exists in the document and context supports 2D

        ctx = canvas.getContext("2d"); //This must be in lower case


        if (ctx) {
            //Setting colours 
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "#000000"; //black
            ctx.lineWidth = 5;

            // x , y , w , h
            ctx.fillRect(50, 50, 100, 100);
            ctx.strokeRect(50, 50, 100, 100);

            //Change the color of the background
            ctx.fillStyle = "blue";
            ctx.fillRect(200, 50, 100, 100);
            ctx.strokeRect(200, 50, 100, 100);

            ctx.strokeStyle = "yellow";
            ctx.lineWidth = 25;

            //Starting the line
            ctx.beginPath();
            ctx.lineCap = "round";

            //Start X ,Y
            ctx.moveTo(100, 300);
            //End X , Y
            ctx.lineTo(250, 300);
            //Draw the line
            ctx.stroke();


            ctx.strokeStyle = "black";
            //Starting the line
            ctx.beginPath();
            ctx.lineCap = "square";

            //Start X ,Y
            ctx.moveTo(550, 300);
            //End X , Y
            ctx.lineTo(650, 150);
            //Draw the line
            ctx.stroke();

            ctx.lineWidth = 2;
            //Path
            ctx.beginPath();
            ctx.moveTo(150, 200);
            ctx.lineTo(200, 150);
            ctx.lineTo(250, 200);
            ctx.lineTo(200, 250);
            ctx.stroke();

            //Path
            ctx.beginPath();
            ctx.moveTo(350, 400);
            ctx.lineTo(400, 350);
            ctx.lineTo(450, 400);
            ctx.lineTo(400, 450);
            ctx.closePath(); //Close the path
            ctx.stroke();

            ctx.fillStyle = "blue";
            //Path
            ctx.beginPath();
            ctx.moveTo(650, 700);
            ctx.lineTo(700, 650);
            ctx.lineTo(750, 700);
            ctx.lineTo(700, 750);
            ctx.fill();
            ctx.closePath(); //Close the path
            ctx.stroke();

            //half of an arc
            ctx.beginPath();
            //x , y , size  , cut the circle , true = if you wanna reverse the circle 
            ctx.arc(100, 350, 50, 0.1 * Math.PI, 2.3 * Math.PI);
            ctx.stroke();

            //half of an arc
            ctx.beginPath();         // Start path , Finish path , reverse
            ctx.arc(100, 550, 50, 1.4 * Math.PI, 1.9 * Math.PI, true);
            ctx.stroke();

            //half of an arc
            ctx.beginPath();
            // X, Y , RADIUS, START ANGLE , END ANGLE , FALSE/TRUE
            ctx.arc(100, 850, 50, 0, Math.PI * 2);
            ctx.stroke();


            //Bezier cuadratic curve
            ctx.lineWidth = 10;
            ctx.strokeStyle = "purple";

            ctx.beginPath();
            //first point
            var x1 = 500, y1 = 500;
            ctx.moveTo(x1, y1);
            //X watita direction , how deep will be watita , x2 , y2
            ctx.quadraticCurveTo(400, 800, 900, 400);
            ctx.stroke();


            //Bezier cubic curve
            ctx.lineWidth = 10;
            ctx.strokeStyle = "blue";

            ctx.beginPath();
            //first point
            var x1 = 300, y1 = 300;
            ctx.moveTo(x1, y1);
            // x first curve , y first curve , x second curve , y second curve , x2 , y2
            ctx.bezierCurveTo(400, 600, 550, -200, 800, 300);
            ctx.stroke();


            //ziczac
            var inicioX = 55;
            var inicioY = 650;
            var desplazamiento = 30;
            var lineas = 5;
            ctx.lineWidth = 10;
            ctx.strokeStyle = "green";
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.beginPath();
            //Beggin line
            ctx.moveTo(inicioX, inicioY);

            for (let i = 0; i < lineas; i++) {
                var x = inicioX + ((i + 1) * desplazamiento);
                var y = inicioY;

                if (i % 2 == 0) {
                    y = inicioY + 100;

                }


                //Finish line
                ctx.lineTo(x, y);

            }
            ctx.stroke();


            //Espiral
            let radio = 0, angulo = 0;
            ctx.lineWidth = 3;
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.moveTo(200, 1200);

            for (var i = 0; i < 200; i++) {

                radio += 0.75;
                angulo += (Math.PI * 2) / 50;
                var x = 200 + radio * Math.cos(angulo);
                var y = 1200 + radio * Math.sin(angulo);
                ctx.lineTo(x, y);

            }

            ctx.stroke();


            //Star
            var puntas = 5;
            var vertices = puntas * 2;
            var anguloStar = Math.PI * 2 / vertices;
            var radioInterno = 40;
            var radioExterno = 80;
            var xx = 700;
            var yy = 1200;
            ctx.strokeStyle = "yellow";
            ctx.fillStyle = "yellow";
            ctx.lineWidth = 10;
            ctx.beginPath();


            for (var i = 0; i < vertices; i++) {
                var x1, y1;

                if (i % 2 == 0) {

                    x1 = Math.cos(anguloStar * i) * radioExterno;
                    y1 = Math.sin(anguloStar * i) * radioExterno;

                } else {

                    x1 = Math.cos(anguloStar * i) * radioInterno;
                    y1 = Math.sin(anguloStar * i) * radioInterno;

                }

                ctx.lineTo(xx + x1, yy + y1);

            }

            ctx.closePath();
            ctx.fill();
            ctx.stroke();


            //Gear
            var ubiX = 700;
            var ubiY = 900;

            //Radius of the circles
            var radioExterno1 = 95;
            var radioInterno1 = 50;
            var radioMedio1 = radioInterno1 * 1.6;
            var radioCentro1 = 20;

            //Points Numbers 
            var numPuntos = 40;

            ctx.beginPath();
            ctx.lineJoin = "bevel";

            for (var i = 0; i < numPuntos; i++) {
                var radio1 = null;

                if (i % 2 == 0) {
                    radio1 = radioExterno1;
                } else {

                    radio1 = radioInterno1;
                }

                var anguloEn = Math.PI * 2 / numPuntos * (i + 1);

                var x2 = (radio1 * Math.sin(anguloEn)) + ubiX;
                var y2 = (radio1 * Math.cos(anguloEn)) + ubiY;


                if (i === 0) {
                    ctx.moveTo(x2, y2);
                } else {
                    ctx.lineTo(x2, y2);
                }
            }

            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = "blue";
            ctx.fillStyle = "blue";
            ctx.stroke();


            //Rectangle
            function Rectangle(x, y, width, height, radius, background, line) {

                this.x = x;
                this.y = y;
                this.w = width;
                this.h = height;
                this.r = radius;
                this.f = background;
                this.l = line;

                this.dibujar = function () {

                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y + this.r);

                    //left inferior corner
                    ctx.lineTo(this.x, this.y + this.h - this.r);
                    ctx.quadraticCurveTo(this.x, this.y + this.h, this.x + this.r, this.y + this.h);

                    //Right inferior corner
                    ctx.lineTo(this.x + this.w - this.r, this.y + this.h);
                    ctx.quadraticCurveTo(this.x + this.w, this.y + this.h, this.x + this.w, this.y + this.h - this.r);

                    //Right superior corner
                    ctx.lineTo(this.x + this.w, this.y + this.r);
                    ctx.quadraticCurveTo(this.x + this.w, this.y, this.x + this.w - this.r, this.y);

                    //Left superior corner
                    ctx.lineTo(this.x + this.r, this.y);
                    ctx.quadraticCurveTo(this.x, this.y, this.x, this.y + this.r);

                    ctx.fillStyle = this.f;
                    ctx.strokeStyle = this.l;
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();



                }
            }

            var rectasdfg = new Rectangle(600, 200, 200, 120, 10, "cyan", "black");

            rectasdfg.dibujar();

        } else {

            alert("No soporta la etiqueta canvas");

        }
    }
});