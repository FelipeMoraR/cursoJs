

game = {

    canvas : null,
    ctx : null,
    imagen : null,
    caratula : true,
    imagenEnemigo : null,
    teclaPulsada : null,
    tecla : [],
    colorBala : "red",
    colorBala2 : "green",
    balas_array : new Array(),
    balasEnemigas_array : new Array(),
    enemigos_array : new Array(),
    disparo : false,
    puntos: 0,
    finJuego : false,

}

const KEY_ENTER = 13;
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const BARRA = 32;



//Objetos
function Bala(x, y, w){

    this.x = x;
    this.y = y;
    this.w = w;
    this.dibujar = function(z) { 

        //Dibujar la bala
        game.ctx.save();
        game.ctx.fillStyle = game.colorBala;
        game.ctx.fillRect(this.x, this.y, this.w, this.w);
        this.y = this.y - 4;
        game.ctx.restore();

    };

    this.disparar = function() {
        game.ctx.save();
        game.ctx.fillStyle = game.colorBala2;
        game.ctx.fillRect(this.x, this.y, this.w, this.w);
        this.y = this.y + 4;
        game.ctx.restore();
    }

}



function Jugador(x){
    this.x = x;
    this.y = 450;
    this.w = 40;
    this.h = 15;
    this.dibujar = function (x){
        this.x = x;
        game.ctx.drawImage(game.imagen, this.x, this.y, this.w, this.h);
    };
}

function Enemigo(x, y){

    this.x = x;
    this.y = y;
    this.w = 40;
    this.veces = 0;
    this.dx = 5;
    this.ciclos = 0;
    this.num = 70;
    this.figura = true;
    this.vive = true;
    this.dibujar = function () {

        //Retraso
        if(this.ciclos > 30){
            //Saltitos
            if(this.veces > this.num){

                this.dx *= -1;
                this.veces = 0;
                this.num = 70;
                this.y += 20;
                this.dx = (this.dx > 0) ? this.dx++ : this.dx--; 
            
            }else{

                this.x += this.dx;


            }

            this.veces ++;
            this.ciclos = 0;
            this.figura = !this.figura;


        }else{

            this.ciclos++;

        }

        if(this.figura){

            game.ctx.drawImage(game.imagenEnemigo, 0, 0, 40, 30, this.x, this.y, 35, 30);

        }else{

            game.ctx.drawImage(game.imagenEnemigo, 50, 0, 35, 30, this.x, this.y, 35, 30);

        }

        

    };
}





const caratula = () => {
    let imagen = new Image();

    imagen.src = "imagen/caratula.jpg"
    imagen.onload = () => {

        game.ctx.drawImage(imagen, 0, 0);

    }
}



const seleccionar = (e) => {

    if(game.caratula){

        inicio();

    }

}


const inicio = () => {

    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    game.caratula = false;

    game.jugador = new Jugador(0);
    game.x = game.canvas.width / 2;
    game.jugador.dibujar(game.x);
    animar();

}





const animar = () =>{
    if(game.finJuego == false){
        requestAnimationFrame(animar);
        verificar();
        pintar();
        colisiones();
    }else{


    }
    


}

const colisiones = () =>{

    let enemigo, bala;

    for(var i=0; i < game.enemigos_array.length; i++){
        for(var j=0; j < game.balas_array.length; j++){

            enemigo = game.enemigos_array[i];
            bala = game.balas_array[j];

            if(enemigo != null && bala != null){

                if((bala.x > enemigo.x) && 
                (bala.x < enemigo.x + enemigo.w) &&
                (bala.y > enemigo.y) &&
                (bala.y < enemigo.y + enemigo.w)){

                    enemigo.vive = false;
                    game.enemigos_array[i] = null;
                    game.balas_array[j] = null;
                    game.disparo = false;
                    game.puntos += 10;

                }
            }
        }
    }


    //Colision balas enemigas

    for(var j = 0; j < game.balasEnemigas_array.length; j++){

        bala = game.balasEnemigas_array[j];

        if(bala != null){

            if((bala.x > game.jugador.x) && 
            (bala.x < game.jugador.x + game.jugador.w) &&
            (bala.y > game.jugador.y) &&
            (bala.y < game.jugador.y + game.jugador.h)){

                gameOver();

            }
        }

    }
    
}

const verificar = () => {

    if(game.tecla[KEY_RIGHT]) game.x += 10;
    if(game.tecla[KEY_LEFT]) game.x -= 10;

    //Verificacion de cañon
    if(game.x > game.canvas.width - 35) game.x = game.canvas.width - 35;
    if(game.x < 0) game.x = 1; 

    //Disparo
    if(game.tecla[BARRA]){

        if(game.disparo == false){

            game.balas_array.push(new Bala(game.jugador.x + 12, game.jugador.y - 3, 5))
            game.tecla[BARRA] = false;
            game.disparo = true;

        }
        
    }

    //disparo enemigo
    if(Math.random() > 0.96){
        
        dispararEnemigo();

    }

}

const dispararEnemigo = () => {
    var ultimos = new Array;

    for(var i = game.enemigos_array.length - 1; i>0; i--){
        if(game.enemigos_array[i] != null){
            ultimos.push(i);
        }

        if(ultimos.length == 10) break;
    }

    d = ultimos[Math.floor(Math.random() * 10)];
    
    game.balasEnemigas_array.push(new Bala(game.enemigos_array[d].x + game.enemigos_array[d].w/2, game.enemigos_array[d].y, 5));

}

const pintar = () => {

    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    game.jugador.dibujar(game.x);
    score();

    //Movimiento de balas
    for(var i = 0; i < game.balas_array.length; i++){

        if(game.balas_array[i] != null){
    
            game.balas_array[i].dibujar();

            if(game.balas_array[i].y < 0){

                game.disparo = false;
                game.balas_array[i] = null;
                

            } 
    
        }
    }

    //Balas enemigas
    for(var i = 0; i < game.balasEnemigas_array.length; i++){

        if(game.balasEnemigas_array[i] != null){

            game.balasEnemigas_array[i].disparar();

            if(game.balasEnemigas_array[i].y > game.canvas.height){

                game.balasEnemigas_array[i] = null;
            }
        }
    }

    //Enemigos
    for(var i = 0; i < game.enemigos_array.length; i++){
        
        if(game.enemigos_array[i] != null){
            game.enemigos_array[i].dibujar();
        }   
       

    }

}

const gameOver = () => {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    game.balas_array = [];
    game.enemigos_array = [];
    game.balasEnemigas_array = [];
    game.finJuego = true;
    mensaje("Game over" , 100, 60);
    mensaje("Lograste " + game.puntos + " puntos", 220);

    if(game.puntos>100 || game.puntos <= 200){

        mensaje("Casi lo logras" , 340);

    }else if(game.puntos > 200){
        mensake("Felicitaciones", 340)
    }else{
        mensaje("Lo sentimos" , 100, 60);
    }

}

const mensaje = (cadena, y , tamano = 40) =>{
    let medio = (game.canvas.width)/2;
    
    game.ctx.save();
    game.ctx.fillStyle = "green";
    game.ctx.strokeStyle = "blue";
    game.ctx.textBaseline = "top";
    game.ctx.font = "bold " + tamano + "px Courier";
    game.ctx.textAlign = "center";
    game.ctx.fillText(cadena, medio, y);
    game.ctx.restore();
}

const score = () => {

    game.ctx.save();
    game.ctx.fillStyle = "white";
    game.ctx.font = "bold 20px Courier"
    game.ctx.fillText("Score: " + game.puntos, 10, 20);
    game.ctx.restore();

}




document.addEventListener("keydown",function(e){
    game.teclaPulsada=e.keyCode;
    game.tecla[e.keyCode]=true;

});

document.addEventListener("keyup", function (e) {
    game.tecla[e.keyCode] = false;

});


window.requestAnimationFrame = (function(){
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) { window.setTimeout(callback, 17); };
})();

document.addEventListener("DOMContentLoaded", function(){

    game.canvas = document.getElementById("canvas");
    
    game.canvas.width = 960;
    game.canvas.height = 500;

    if(game.canvas && game.canvas.getContext){

        game.ctx = game.canvas.getContext("2d");

        if (game.ctx){
            
            game.imagen = new Image();
            game.imagen.src = "imagen/torre.fw.png";

            //Crear enemigos
            game.imagenEnemigo = new Image();
            game.imagenEnemigo.src = "imagen/invader.fw.png"
            game.imagenEnemigo.onload = function(){

                //Filas
                for(var i = 0; i < 5; i++){
                    
                    //Columnas
                    for(var j = 0; j < 10; j++){

                        game.enemigos_array.push(new Enemigo(100 + 40*j, 30+45*i ));

                    }

                }    

            }
            

            caratula();
            
            game.canvas.addEventListener("click", seleccionar, false);
            
            
            
           

        }
        else{

            alert("No cuenta con canvas");

        }
    }
})