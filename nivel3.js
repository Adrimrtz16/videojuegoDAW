let idIntervaloTextoTails,idIntervaloAnimacionTails,idIntervaloAnillo;
let coleccionable3Cogido = false
let misionNivel3 = false;
let recompensaReclamada3 = false;
let mostrandoTexto3 = false;
let textoDeGraciasTails = true
let graciasDadasTails = false;
let iniciarMision3 = false;
let intervaloColeccinable3;
let idMoverPlataforma1,idMoverPlataforma2,idMoverPlataforma3;
let idMoverPinchos1,idMoverPinchos2,idMoverPinchos3,idMoverPinchos4,idMoverPinchos5,idMoverPinchos6;

let plataformasNivel3 = [
    new Plataforma(0, 0, 0, 0),
    new Plataforma(0, 960, 512, 192),
    new Plataforma(640, 960, 192, 64, 1152),
    new Plataforma(1600, 960, 192, 64, 704),
    new Plataforma(0, 704, 1536, 64),
    new Plataforma(320, 320, 1600, 64),
    new Plataforma(1472, 640, 64, 64),
    new Plataforma(1088, 640, 64, 64),
    new Plataforma(320, 640, 64, 64),
    new Plataforma(704, 640, 64, 64),
    new Plataforma(64, 640 , 192, 64, 320),
    new Plataforma(320, -200, 64, 328),
    new Plataforma(704, -200, 64, 200),
    new Plataforma(1088, -200, 64, 264),
    new Plataforma(1472, -192, 64, 192),
    new Plataforma(320, 256, 64, 192),
    new Plataforma(704, 128, 64, 320),
    new Plataforma(1088, 192, 64, 256),
    new Plataforma(1472, 64, 64, 384),
]

let pinchosNivel3 = [
    new Plataforma(330, 680, 1179, 30),
    new Plataforma(350, 295, 1179, 30),
    new Plataforma(497, 177, 98, 98, 0),
    new Plataforma(881, 177, 98, 98, 0),
    new Plataforma(1265, 177, 98, 98, 0),
    new Plataforma(497, 561, 98, 98, 384),
    new Plataforma(881, 561, 98, 98, 384),
    new Plataforma(1265, 561, 98, 98, 384),
]

let areaMensajeTails = new Plataforma(256,768,384,256);
let areaColeccinable3 = new Plataforma(128,640,64,64);
let areaFinalNivel3 = new Plataforma(1472, 0, 512, 320);

let textoTailsMision = new BocadilloComic(400,704,17);
let textoTailsGracias = new BocadilloComic(400,704,8);

let anillo = new AnimacionNivel3 (128,640,64,64,3,imgAnillo);
let tails = new AnimacionNivel3(360,770,64,64,7,imgTails);

function AnimacionNivel3(x, y, tamañoX, tamañoY,numeroDeImagenes, imagen) {
    this.x = x;
    this.y = y;
    this.tamañoX = tamañoX;
    this.tamañoY = tamañoY;
    this.posicion = 0;
    this.imagen = imagen
    this.numeroDeImagenes = numeroDeImagenes
}

AnimacionNivel3.prototype.cambiarPosicionAnimacionNivel3 = function() {
    this.posicion = (this.posicion + 1) % this.numeroDeImagenes;
}

AnimacionNivel3.prototype.pintarAnimacionNivel3 = function() {
    ctxFrente.drawImage(this.imagen[this.posicion], // Imagen completa con todos los comecocos (Sprite)
                        0, 0,                         // Coordenadas de recorte en el sprite
                        this.tamañoX, this.tamañoY,   // Tamaño del recorte
                        this.x, this.y,               // Posición en la pantalla
                        this.tamañoX*3, this.tamañoY*3);  // Tamaño del dibujo
}

function fondoNivel3(){
    ctxFondo.drawImage(imgFondoNivel3_1, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_2, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_3, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_4, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_5, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgPlataformasNivel3, 0, 0, fondo.width, fondo.height);

    idMoverPlataforma1 = setInterval(() => plataformas[2].moverEnX(640), 5)
    idMoverPlataforma2 = setInterval(() => plataformas[3].moverEnY(960), 5)
    idMoverPlataforma3 = setInterval(() => plataformas[10].moverEnY(640), 5)

    idPersonaje = setInterval(moverPersonaje,16);  
    idSprite = setInterval(posicionDelProtagonista, 150);

    idIntervaloAnimacionTails = setInterval(() => tails.cambiarPosicionAnimacionNivel3(), 400);
    idIntervaloAnillo = setInterval(() => anillo.cambiarPosicionAnimacionNivel3(), 200);
}


function iniciarNivel3() {

    audNivel3.currentTime = 0;
    audNivel3.loop = true;
    audNivel3.volume = 0.2;
    audNivel3.play();

    saltar = false;
    protagonista.haSaltado = false;
    protagonista.haLLegadoArriba = false;
    protagonista.velocidadCaida = 1

    protagonista.x = 130;
    protagonista.y = 896;
    plataformas = plataformasNivel3;

    textoTailsGracias.imagen = imgGraciasShovel;
    textoTailsMision.imagen = imgMisionTails;

    setTimeout(() => {
        idMoverPinchos1 = setInterval(() => pinchosNivel3[2].moverEnY(207), 7);
    }, 0);

    setTimeout(() => {
        idMoverPinchos2 = setInterval(() => pinchosNivel3[3].moverEnY(207), 7);
    }, 500);

    setTimeout(() => {
        idMoverPinchos3 = setInterval(() => pinchosNivel3[4].moverEnY(207), 7);
    }, 1000);

    setTimeout(() => {
        idMoverPinchos4 = setInterval(() => pinchosNivel3[5].moverEnY(591), 7);
    }, 1500);

    setTimeout(() => {
        idMoverPinchos5 = setInterval(() => pinchosNivel3[6].moverEnY(591), 7);
    }, 2000);

    setTimeout(() => {
        idMoverPinchos6 = setInterval(() => pinchosNivel3[7].moverEnY(591), 7);
    }, 2500);

    ctxFondo.drawImage(imgIntroNivel3, 0, 0, fondo.width, fondo.height);

    setTimeout(fondoNivel3,2500);
}

function nivel3() {
    
    pinchosNivel3.forEach(pincho => {
        pincho.muerte3();
    });

    
    tails.pintarAnimacionNivel3();

    if(protagonista.y - protagonista.tamañoY > 1080) {

        audMuerte.currentTime = 0.31;
        audMuerte.volume = 0.2;
        audMuerte.play();
        setTimeout(() => audMuerte.pause(), 1000);

        contadorDeMuertes++;

        protagonista.x = 130;
        protagonista.y = 896;
        coleccionable3Cogido = false;
        misionNivel3 = false;
        recompensaReclamada3 = false;
        iniciarMision3 = false;
    }

    ctxFrente.drawImage(imgPinchito, pinchosNivel3[2].x - 30, pinchosNivel3[2].y - 30, pinchosNivel3[2].tamañoX + 60, pinchosNivel3[2].tamañoY + 60);
    ctxFrente.drawImage(imgPinchito, pinchosNivel3[3].x - 30, pinchosNivel3[3].y - 30, pinchosNivel3[3].tamañoX + 60, pinchosNivel3[3].tamañoY + 60);
    ctxFrente.drawImage(imgPinchito, pinchosNivel3[4].x - 30, pinchosNivel3[4].y - 30, pinchosNivel3[4].tamañoX + 60, pinchosNivel3[4].tamañoY + 60);
    ctxFrente.drawImage(imgPinchito, pinchosNivel3[5].x - 30, pinchosNivel3[5].y - 30, pinchosNivel3[5].tamañoX + 60, pinchosNivel3[5].tamañoY + 60);
    ctxFrente.drawImage(imgPinchito, pinchosNivel3[6].x - 30, pinchosNivel3[6].y - 30, pinchosNivel3[6].tamañoX + 60, pinchosNivel3[6].tamañoY + 60);
    ctxFrente.drawImage(imgPinchito, pinchosNivel3[7].x - 30, pinchosNivel3[7].y - 30, pinchosNivel3[7].tamañoX + 60, pinchosNivel3[7].tamañoY + 60);

    ctxFrente.drawImage(imgNube, plataformasNivel3[2].x-40, plataformasNivel3[2].y - 50, plataformasNivel3[2].tamañoX +80, plataformasNivel3[2].tamañoY + 60); 
    ctxFrente.drawImage(imgNube, plataformasNivel3[3].x -40, plataformasNivel3[3].y- 50, plataformasNivel3[3].tamañoX +80, plataformasNivel3[3].tamañoY + 60); 
    ctxFrente.drawImage(imgNube, plataformasNivel3[10].x -40, plataformasNivel3[10].y- 50, plataformasNivel3[10].tamañoX +80, plataformasNivel3[10].tamañoY + 60); 

    if(misionNivel3) {
        ctxFrente.drawImage(imgMision, 370,380, fondo.width, fondo.height);
        if(colisionCompleta(areaMensajeTails, protagonista)) {
            recompensaReclamada3 = true;
            misionNivel3 = false;
        }
    }

    if(!iniciarMision3) {
        ctxFrente.drawImage(imgMision, 370,380, fondo.width, fondo.height);
    }

    if(colisionCompleta(protagonista,areaMensajeTails) && !mostrandoTexto3 && !recompensaReclamada3) {
        idIntervaloTextoMadeline = setInterval(() => textoTailsMision.letrasTextoMision(), 100)
        mostrandoTexto3 = true;
        iniciarMision3 = true;
    }

    if(colisionCompleta(protagonista,areaMensajeTails) && !recompensaReclamada3) {
        textoTailsMision.pintarTextoShovel();
        if (textoTailsMision.cambioDePosicion === 16) {
            clearInterval(idIntervaloTextoMadeline);
        }
    } else if (!colisionCompleta(protagonista,areaMensajeTails) && mostrandoTexto3){
        mostrandoTexto3 = false;
        clearInterval(idIntervaloTextoMadeline);
    }

    if (!coleccionable3Cogido) {
        anillo.pintarAnimacionNivel3();
        if(colisionCompleta(protagonista,areaColeccinable3)){

            audColeccionable3.currentTime = 0;
            audColeccionable3.volume = 0.2;
            audColeccionable3.play();

            coleccionable3Cogido = true;
            misionNivel3 = true;
            mostrandoTexto3 = false;
            iniciarMision3 = true;
        }
    }

    if(recompensaReclamada3) {
        if(colisionCompleta(protagonista,areaMensajeTails)) {
            textoTailsGracias.pintarTextoShovel();
            if(textoDeGraciasTails){
                idIntervaloTextoMadeline = setInterval(() => textoTailsGracias.letrasTextoMision(), 100)
                textoDeGraciasTails = false;
            }
        }

        if (textoTailsGracias.cambioDePosicion === 7 && !graciasDadasTails) {
            
            clearInterval(idIntervaloTextoMadeline);
            graciasDadasTails = true
            
        }
    }

    if(colisionCompleta(protagonista,areaFinalNivel3)) {
        ctxFrente.drawImage(imgFinDeNivel, 1420, 10,500,50);
    }

    if(colisionCompleta(protagonista,areaFinalNivel3) && terminarNivel) {
        if(coleccionable3Cogido && recompensaReclamada3) {
            puntuacion += 1000;
        } else if (coleccionable3Cogido) {
            puntuacion += 500;
        } else {
            puntuacion += 250;
        }

        clearInterval(idPersonaje);
        clearInterval(idSprite);
        clearInterval(idMoverPlataforma1);
        clearInterval(idMoverPlataforma2);
        clearInterval(idMoverPlataforma3);
        clearInterval(idMoverPinchos1);
        clearInterval(idMoverPinchos2);
        clearInterval(idMoverPinchos3);
        clearInterval(idMoverPinchos4);
        clearInterval(idMoverPinchos5);
        clearInterval(idMoverPinchos6);
        clearInterval(idIntervaloAnimacionTails);
        clearInterval(idIntervaloAnillo);
        clearInterval(idIntervaloTextoMadeline);

        clearInterval(idContadorSegundos);
        audNivel3.pause();

        nivel3Completado = true;
        plataformas = [];
        iniciarNivelPantallaFinal();
        
        ctxFrente.clearRect(0, 0, 1920, 1080);
        
    }
}
