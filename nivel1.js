let posicionHoguera = 0;
let posicionTextoShovel = 0;
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

function fuegoHoguera() {

    posicionHoguera = (posicionHoguera + 1) % 3;  // Cargará posiciones 0 y 1 del array

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

function TextoShovel() {
    this.x = 75;
    this.y = 300;
    this.tamañoX = 256;
    this.tamañoY = 191;
    this.imagen = imgTextoShovel;
    this.animacionSprite = [[0,0],[256,0],[512,0],[768,0],[1024,0],[1280,0],
                            [0,191],[256,191],[512,191],[768,191],[1024,191],[1280,191],
                            [0,383],[256,383],[512,383],[768,383],[1024,383],[1280,383]];
}

TextoShovel.prototype.pintarTextoShovel = function() {
    ctxFrente.drawImage(this.imagen, // Imagen completa con todos los comecocos (Sprite)
                        this.animacionSprite[posicionTextoShovel][0],    // Posicion X del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
                        this.animacionSprite[posicionTextoShovel][1],	  // Posicion Y del sprite donde se encuentra el comecocos que voy a recortar del sprite para dibujar
                        this.tamañoX, 		    // Tamaño X del comecocos que voy a recortar para dibujar
                        this.tamañoY,	        // Tamaño Y del comecocos que voy a recortar para dibujar
                        this.x,                // Posicion x de pantalla donde voy a dibujar el comecocos recortado
                        this.y,				            // Posicion y de pantalla donde voy a dibujar el comecocos recortado
                        this.tamañoX,		    // Tamaño X del comecocos que voy a dibujar
                        this.tamañoY);      // Tamaño Y del comecocos que voy a dibujar
}

function letrasTexto() {

    posicionTextoShovel = (posicionTextoShovel + 1) % 18;  // Cargará posiciones 0 y 1 del array
    console.log("entra")
}

let totalImages = 7; // Número total de imágenes
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

    ctxFondo.drawImage(imgPlataformasNivel1, 0, 0, fondo.width, fondo.height); 
    ctxFondo.drawImage(imgCuevaPorDentro, 0, 0, fondo.width, fondo.height); 
    ctxFondo.drawImage(imgShovelKnight, 35, 445); 
    
}