let totalImages = 26; // Número total de imágenes
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

let imgMisionMadeline = new Image();
imgMisionMadeline.src = 'imagenes/misionMadeline.png';
imgMisionMadeline.onload = checkAllImagesLoaded;

let imgFinalNivel2 = new Image();
imgFinalNivel2.src = 'imagenes/finalNivel2.png';
imgFinalNivel2.onload = checkAllImagesLoaded;

let imgFondoNivel3_1 = new Image();
imgFondoNivel3_1.src = 'imagenes/fondoNivel3/00.png';
imgFondoNivel3_1.onload = checkAllImagesLoaded;

let imgFondoNivel3_2 = new Image();
imgFondoNivel3_2.src = 'imagenes/fondoNivel3/01a.png';
imgFondoNivel3_2.onload = checkAllImagesLoaded;

let imgFondoNivel3_3 = new Image();
imgFondoNivel3_3.src = 'imagenes/fondoNivel3/01b.png';
imgFondoNivel3_3.onload = checkAllImagesLoaded;

let imgFondoNivel3_4 = new Image();
imgFondoNivel3_4.src = 'imagenes/fondoNivel3/02a.png';
imgFondoNivel3_4.onload = checkAllImagesLoaded;

let imgFondoNivel3_5 = new Image();
imgFondoNivel3_5.src = 'imagenes/fondoNivel3/02b.png';
imgFondoNivel3_5.onload = checkAllImagesLoaded;

let imgPlataformasNivel3 = new Image();
imgPlataformasNivel3.src = 'imagenes/plataformasLvl3.png';
imgPlataformasNivel3.onload = checkAllImagesLoaded;

let imgNube = new Image();
imgNube.src = 'imagenes/nube.png';
imgNube.onload = checkAllImagesLoaded;

let imgFinDeNivel = new Image();
imgFinDeNivel.src = 'imagenes/finDeNivel.png';
imgFinDeNivel.onload = checkAllImagesLoaded;

let imgIntroNivel1 = new Image();
imgIntroNivel1.src = 'imagenes/introNivel1.png';
imgIntroNivel1.onload = checkAllImagesLoaded;

let imgIntroNivel2 = new Image();
imgIntroNivel2.src = 'imagenes/introNivel2.png';
imgIntroNivel2.onload = checkAllImagesLoaded;

let imgIntroNivel3 = new Image();
imgIntroNivel3.src = 'imagenes/introNivel3.png';
imgIntroNivel3.onload = checkAllImagesLoaded;

let imgPinchito = new Image();
imgPinchito.src = 'imagenes/pinchito.png';
imgPinchito.onload = checkAllImagesLoaded;

let imgMisionTails = new Image();
imgMisionTails.src = 'imagenes/misionTails.png';
imgMisionTails.onload = checkAllImagesLoaded;

let audNivel1 = new Audio('sonidos/nivel1.mp3');

let audNivel2 = new Audio('sonidos/nivel2.mp3');

let audNivel3 = new Audio('sonidos/nivel3.mp3');

let audMuerte = new Audio('sonidos/muerte.mp3');

let audColeccionable1 = new Audio('sonidos/coleccionable1.mp3');

let audColeccionable2 = new Audio('sonidos/coleccionable2.wav');

let audColeccionable3 = new Audio('sonidos/coleccionable3.mp3');

let audOutro = new Audio('sonidos/outro.mp3');

let imgFresa = [];
for (let i = 0; i <= 47; i++) {
    imgFresa[i] = new Image();
    imgFresa[i].src = `imagenes/fresa/f${i}.png`;
    imgFresa[i].onload = checkAllImagesLoaded;
}

totalImages += 48;

let imgMadeline = [];
for (let i = 0; i <= 6; i++) {
    imgMadeline[i] = new Image();
    imgMadeline[i].src = `imagenes/madeline/m${i}.png`;
    imgMadeline[i].onload = checkAllImagesLoaded;
}

totalImages += 7;

let imgTails = [];
for (let i = 0; i <= 6; i++) {
    imgTails[i] = new Image();
    imgTails[i].src = `imagenes/tails/t${i}.png`;
    imgTails[i].onload = checkAllImagesLoaded;
}

totalImages += 7;

let imgAnillo = [];
for (let i = 0; i <= 3; i++) {
    imgAnillo[i] = new Image();
    imgAnillo[i].src = `imagenes/anillo/a${i}.png`;
    imgAnillo[i].onload = checkAllImagesLoaded;
}

totalImages += 4;

function checkAllImagesLoaded() {
    loadedImages++;
    if (loadedImages === totalImages) {
        todoCargado = true
    }
}