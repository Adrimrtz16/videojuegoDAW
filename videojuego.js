let protagonista = new Personaje();

let plataformas = [
    new Plataforma(0, 0, 0, 0),
    new Plataforma(0, 960, 1024, 192),
    new Plataforma(384, 832, 128, 128),
    new Plataforma(640, 704, 256, 64),
    new Plataforma(896, 192, 128, 768),
    new Plataforma(0, 576, 512, 64),
    new Plataforma(448, 512, 64, 64),
    new Plataforma(0, 320, 448, 64),
    new Plataforma(704, 256, 192, 64),
    new Plataforma(1152, 256, 192, 64),
    new Plataforma(1536, 320, 192, 64),
    new Plataforma(1472, 896, 320, 64) 
]

let imgHogueraShovel = new Image();
imgHogueraShovel.src = 'imagenes/torches.png';
Hoguera.prototype.imagen = imgHogueraShovel;

let imgShovelKnight = new Image();
imgShovelKnight.src = 'imagenes/Roy_Shovel_Knights_Stalwart_Plate.webp'

let imgPlataformasNivel1 = new Image();
imgPlataformasNivel1.src = 'imagenes/plataformasLvl1.png';

let imgFondoNivel1 = new Image();
imgFondoNivel1.src = 'imagenes/00.png';

let imgTituloNivel = new Image();
imgTituloNivel.src = 'imagenes/cardShine005.png';

const topeDerecha = 1920-protagonista.tamañoX;
const topeIzquierda = 0;

let fondo, ctxFondo, frente, ctxFrente;
let xDerecha, xIzquierda, correr, saltar;

let posicion = 0;

function Hoguera() {
    this.x = 165;
    this.y = 385;
    this.tamañoX = 56;
    this.tamañoY = 126;
    this.animacionSprite = [[5,5],[67,5],[129,5]];
}

let hoguera = new Hoguera();

function moverPersonaje() {
    if(protagonista.y - protagonista.tamañoY > 1080) {
        protagonista.x = 120;
        protagonista.y = 896
    }

    if (xDerecha) {
        protagonista.generaPosicionDerecha();
        plataformas.forEach(plataforma => {
            plataforma.colisionConPlataformaDerecha();
        });
    }

    if (xIzquierda) {
        protagonista.generaPosicionIzquierda();
        plataformas.forEach(plataforma => {
            plataforma.colisionConPlataformaIzquierda();
        });
    }

    if (correr) {
        protagonista.personajeCorriendo();
    }

    if (saltar) {
        protagonista.personajeSaltando();
        plataformas.forEach(plataforma => {
            plataforma.colisionConPlataformaAlSaltar();
        });
    }
    if (!saltar) {
        protagonista.aterrizado = false;
        plataformas.forEach(plataforma => {     
            plataforma.personajeCayendo();
        });
    }
    
    ctxFrente.clearRect(0, 0, 1920, 1080);
    ctxFrente.drawImage(hoguera.imagen, // Imagen completa con todos los comecocos (Sprite)
                        hoguera.animacionSprite[posicion][0],    // Posicion X del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
                        hoguera.animacionSprite[posicion][1],	  // Posicion Y del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
                        hoguera.tamañoX, 		    // Tamaño X del comecocos que voy a recortar para dibujar
                        hoguera.tamañoY,	        // Tamaño Y del comecocos que voy a recortar para dibujar
                        hoguera.x,                // Posicion x de pantalla donde voy a dibujar el comecocos recortado
                        hoguera.y,				            // Posicion y de pantalla donde voy a dibujar el comecocos recortado
                        90,		    // Tamaño X del comecocos que voy a dibujar
                        192.62);      // Tamaño Y del comecocos que voy a dibujar
    ctxFrente.fillStyle = "#da3737";
    ctxFrente.fillRect(protagonista.x, protagonista.y, protagonista.tamañoX, protagonista.tamañoY);
}

function fuegoHoguera() {

    posicion = (posicion + 1) % 3;  // Cargará posiciones 0 y 1 del array

}

function fondoNivel1() {
    ctxFondo.drawImage(imgFondoNivel1, 0, 0, fondo.width, fondo.height); 
    ctxFondo.fillStyle = "#683415";
    

    /*plataformas.forEach(plataforma => {
        ctxFondo.fillRect(plataforma.x, plataforma.y, plataforma.tamañoX, plataforma.tamañoY); 
    });*/

    ctxFondo.drawImage(imgPlataformasNivel1, 0, 0, fondo.width, fondo.height); 
    ctxFondo.drawImage(imgShovelKnight, 35, 445); 
    //ctxFondo.drawImage(imgTituloNivel, 0, 0, 470, 150); 
    
    ctxFondo.font = 'bold 100px arial';
    ctxFondo.fillStyle = 'white';
    ctxFondo.strokeStyle = 'black';     
    ctxFondo.lineWidth = 4;

    //ctxFondo.fillText('Tutorial', 50, 105);
    //ctxFondo.strokeText('Tutorial', 50, 105);
    
}

function activaMovimiento(evt) {
    
    switch (evt.keyCode) {
        case 65:
            xIzquierda = true;
            break;
        case 68:
            xDerecha = true;
            break;
        case 83:
            correr = true;
            break;
        case 32:
            if(protagonista.aterrizado){
                protagonista.velocidadCaida = 13
                saltar = true;                 
            }
            break;
    }
}

function desactivaMovimiento(evt) {

    switch (evt.keyCode) {
        case 65:
            xIzquierda = false;
            break;
        case 68:
            xDerecha = false;
            break;
        case 83:
            correr = false;
            protagonista.personajeAndando();
            break;
    }
}

function colisionCompleta(obj1, obj2) {

    let colision = false

    if(obj1.x < obj2.x + obj2.tamañoX && 
        obj1.x + obj1.tamañoX > obj2.x &&
        obj1.y < obj2.y + obj2.tamañoY &&
        obj1.y + obj1.tamañoY > obj2.y 
    ) {
        colision = true;
    }

    return colision;

}

document.addEventListener("keydown", activaMovimiento, false);
document.addEventListener("keyup", desactivaMovimiento, false);

fondo = document.getElementById("fondo");
frente = document.getElementById("frente");

ctxFondo = fondo.getContext("2d");
ctxFrente = frente.getContext("2d");

imgFondoNivel1.onload = function () {
    fondoNivel1();
};

idPersonaje = setInterval(moverPersonaje,16);  

let idHoguera = setInterval(fuegoHoguera,500)



