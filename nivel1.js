let posicionHoguera = 0;
let posicionTextoMision1 = 0;
let posicionGraciasShovel = 0

let subir = false

function Hoguera() {
    this.x = 165;
    this.y = 385;
    this.tamañoX = 56;
    this.tamañoY = 126;
    this.imagen = imgHogueraShovel;
    this.animacionSprite = [[5,5],[67,5],[129,5]];
}

Hoguera.prototype.pintarHoguera = function() {
    ctxFrente.drawImage(this.imagen, // Imagen completa con todos los comecocos (Sprite)
                        this.animacionSprite[posicionHoguera][0],    // Posicion X del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
                        this.animacionSprite[posicionHoguera][1],	  // Posicion Y del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
                        this.tamañoX, 		    // Tamaño X del comecocos que voy a recortar para dibujar
                        this.tamañoY,	        // Tamaño Y del comecocos que voy a recortar para dibujar
                        this.x,                // Posicion x de pantalla donde voy a dibujar el comecocos recortado
                        this.y,				            // Posicion y de pantalla donde voy a dibujar el comecocos recortado
                        90,		    // Tamaño X del comecocos que voy a dibujar
                        192.62);      // Tamaño Y del comecocos que voy a dibujar
}

let plataformasNivel1 = [
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

let mensajeShovelKnight = new Area(0,385,320,192);
let areaColeccinable1 = new Area(1203,340,95,94);

function BocadilloComic(numeroDeSprites) {
    this.x = 75;
    this.y = 300;
    this.tamañoX = 256;
    this.tamañoY = 191;
    this.imagen;
    this.animacionSprite = [[0,0],[256,0],[512,0],[768,0],[1024,0],[1280,0],
                            [0,191],[256,191],[512,191],[768,191],[1024,191],[1280,191],
                            [0,383],[256,383],[512,383],[768,383],[1024,383],[1280,383]];
                            
    this.cambioDePosicion = 0;
    this.numeroDeSprites = numeroDeSprites;
}

BocadilloComic.prototype.pintarTextoShovel = function() {
    ctxFrente.drawImage(this.imagen, // Imagen completa con todos los comecocos (Sprite)
                        this.animacionSprite[this.cambioDePosicion][0],    // Posicion X del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
                        this.animacionSprite[this.cambioDePosicion][1],	  // Posicion Y del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
                        this.tamañoX, 		    // Tamaño X del comecocos que voy a recortar para dibujar
                        this.tamañoY,	        // Tamaño Y del comecocos que voy a recortar para dibujar
                        this.x,                // Posicion x de pantalla donde voy a dibujar el comecocos recortado
                        this.y,				            // Posicion y de pantalla donde voy a dibujar el comecocos recortado
                        this.tamañoX,		    // Tamaño X del comecocos que voy a dibujar
                        this.tamañoY);      // Tamaño Y del comecocos que voy a dibujar

       
}

BocadilloComic.prototype.letrasTextoMision = function () {
    this.cambioDePosicion = (this.cambioDePosicion + 1) % this.numeroDeSprites;  // Cargará posiciones 0 y 1 del array
}

function fuegoHoguera() {

    posicionHoguera = (posicionHoguera + 1) % 3;  // Cargará posiciones 0 y 1 del array

}

function coleccionableOscilando() {
    if(!subir) {
        posicionY++;
        if(posicionY === 20){
            subir = true;
        }
    }else if(subir){
        posicionY--;
        if(posicionY === 0){
            subir = false;
        }
    }
}

let totalImages = 11; // Número total de imágenes
let loadedImages = 0;

let imgHogueraShovel = new Image();
imgHogueraShovel.src = 'imagenes/torches.png';
imgHogueraShovel.onload = checkAllImagesLoaded;

let imgShovelKnight = new Image();
imgShovelKnight.src = 'imagenes/Roy_Shovel_Knights_Stalwart_Plate.webp';
imgShovelKnight.onload = checkAllImagesLoaded;

let imgPlataformasNivel1 = new Image();
imgPlataformasNivel1.src = 'imagenes/plataformasLvl1.png';
imgPlataformasNivel1.onload = checkAllImagesLoaded;

let imgFondoNivel1 = new Image();
imgFondoNivel1.src = 'imagenes/00.png';
imgFondoNivel1.onload = checkAllImagesLoaded;

let imgTituloNivel = new Image();
imgTituloNivel.src = 'imagenes/cardShine005.png';
imgTituloNivel.onload = checkAllImagesLoaded;

let imgCuevaPorDentro = new Image();
imgCuevaPorDentro.src = 'imagenes/cuevaPorDentro.png';
imgCuevaPorDentro.onload = checkAllImagesLoaded;

let imgTextoShovel = new Image();
imgTextoShovel.src = 'imagenes/texto shovel.png';
imgTextoShovel.onload = checkAllImagesLoaded;

let imgColeccionable1 = new Image();
imgColeccionable1.src = 'imagenes/coleccionable1.png';
imgColeccionable1.onload = checkAllImagesLoaded;

let imgMision = new Image();
imgMision.src = 'imagenes/mision.png';
imgMision.onload = checkAllImagesLoaded;

let imgGraciasShovel = new Image();
imgGraciasShovel.src = 'imagenes/texto shovel gracias.png';
imgGraciasShovel.onload = checkAllImagesLoaded;

let imgFinalNivel1 = new Image();
imgFinalNivel1.src = 'imagenes/finalNivel1.png';
imgFinalNivel1.onload = checkAllImagesLoaded;

function checkAllImagesLoaded() {
    loadedImages++;
    if (loadedImages === totalImages) {
        iniciarJuego(); 
    }
}

function fondoNivel1() {
    ctxFondo.drawImage(imgFondoNivel1, 0, 0, fondo.width, fondo.height); 
    ctxFondo.fillStyle = "#683415";
    

    /*plataformas.forEach(plataforma => {
        ctxFondo.fillRect(plataforma.x, plataforma.y, plataforma.tamañoX, plataforma.tamañoY); 
    });*/
    
    ctxFondo.drawImage(imgFinalNivel1, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgPlataformasNivel1, 0, 0, fondo.width, fondo.height); 
    ctxFondo.drawImage(imgCuevaPorDentro, 0, 0, fondo.width, fondo.height); 
    ctxFondo.drawImage(imgShovelKnight, 35, 445); 
    
}