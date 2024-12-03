let totalImages = 14; // Número total de imágenes
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

let imgSpriteProta = new Image();
imgSpriteProta.src = 'imagenes/sprite prota.png';
imgSpriteProta.onload = checkAllImagesLoaded;

let imgFondoNivel2 = new Image();
imgFondoNivel2.src = 'imagenes/01.png';
imgFondoNivel2.onload = checkAllImagesLoaded;

let imgPlataformasNivel2 = new Image();
imgPlataformasNivel2.src = 'imagenes/plataformasLvl2.png';
imgPlataformasNivel2.onload = checkAllImagesLoaded;

let imgFresa = [];
for (let i = 0; i <= 47; i++) {
    imgFresa[i] = new Image();
    imgFresa[i].src = `imagenes/fresa/f${i}.png`;
    imgFresa[i].onload = checkAllImagesLoaded;
}

totalImages += 48;

function checkAllImagesLoaded() {
    loadedImages++;
    if (loadedImages === totalImages) {
        iniciarNivel1(); 
    }
}