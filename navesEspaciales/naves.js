

game = {

    canvas : null,
    ctx : null,
    imagen : null,
    caratula : true,
    imagenEnemigo : null,
    teclaPulsada : null,
    tecla : [],
    colorBala : "red",
    balas_array : new Array(),
    enemigos_array : new Array(),

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
    this.dibujar = function() { 

        //Dibujar la bala
        game.ctx.save();
        game.ctx.fillStyle = game.colorBala;
        game.ctx.fillRect(this.x, this.y, this.w, this.w);
        this.y = this.y - 4;
        game.ctx.restore();

    };

}



function Jugador(x){
    this.x = x;
    this.y = 450;
    this.dibujar = function (x){
        this.x = x;
        game.ctx.drawImage(game.imagen, this.x, this.y, 30, 15);
    };
}

function Enemigo(x, y){
    this.x = x;
    this.y = y;
    this.w = 35;
    this.veces = 0;
    this.dx = 5;
    this.ciclos = 0;
    this.num = 14;
    this.figura = true;
    this.vive = true;
    this.dibujar = function () {

        game.ctx.drawImage(game.imagenEnemigo, 0, 0, 40, 30, this.x, this.y, 35, 30);

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
            
    requestAnimationFrame(animar);
    verificar();
    pintar();

}

const verificar = () => {

    if(game.tecla[KEY_RIGHT]) game.x += 10;
    if(game.tecla[KEY_LEFT]) game.x -= 10;

    //Verificacion de cañon
    if(game.x > game.canvas.width - 35) game.x = game.canvas.width - 35;
    if(game.x < 0) game.x = 1; 

    //Disparo
    if(game.tecla[BARRA]){
        game.balas_array.push(new Bala(game.jugador.x + 12, game.jugador.y - 3, 5))
        game.tecla[BARRA] = false;
    }


}



const pintar = () => {

    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    game.jugador.dibujar(game.x);

    //Movimiento de balas
    for(var i = 0; i < game.balas_array.length; i++){

        if(game.balas_array[i] != null){
    
            game.balas_array[i].dibujar();

            if(game.balas_array[i].y < 0) game.balas_array[i] = null;
    
        }
    }

    //Enemigos
    for(var i = 0; i < game.enemigos_array.length; i++){
        
        game.enemigos_array[i].dibujar();

    }

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

                for(var i = 0; i < 5; i++){

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