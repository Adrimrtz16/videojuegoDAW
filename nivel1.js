let posicionHoguera = 0;
let posicionTextoMision1 = 0;
let posicionGraciasShovel = 0;

let segundos = 0;
let idContadorSegundos;

let subir = false

let idIntervaloTextoShovel,intervaloColeccinable1;
let coleccionable1Cogido = false
let misionNivel1 = false;
let recompensaReclamada1 = false;
let mostrandoTexto = false;
let textoDeGraciasShovel = true
let graciasDadasShovel = false;
let iniciarMision1 = false;

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
];

let areaMensajeShovelKnight = new Plataforma(0,385,384,192);
let areaColeccinable1 = new Plataforma(1203,340,95,94);
let areaFinalNivel1 = new Plataforma(1472, 704, 320, 192);

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

function BocadilloComic(x,y,numeroDeSprites) {
    this.x = x;
    this.y = y;
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
    ctxFrente.drawImage(this.imagen, 
                        this.animacionSprite[this.cambioDePosicion][0],   
                        this.animacionSprite[this.cambioDePosicion][1],	  
                        this.tamañoX, 		    
                        this.tamañoY,	        
                        this.x,                
                        this.y,				        
                        this.tamañoX,		   
                        this.tamañoY);      

       
}

BocadilloComic.prototype.letrasTextoMision = function () {
    this.cambioDePosicion = (this.cambioDePosicion + 1) % this.numeroDeSprites;  
}

function fuegoHoguera() {

    posicionHoguera = (posicionHoguera + 1) % 3;  

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

function fondoNivel1() {
    ctxFondo.drawImage(imgFondoNivel1, 0, 0, fondo.width+35, fondo.height+35); 
    ctxFondo.fillStyle = "#ffffff";
    
    ctxFondo.drawImage(imgFinalNivel1, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgPlataformasNivel1, 0, 0, fondo.width, fondo.height); 
    ctxFondo.drawImage(imgCuevaPorDentro, 0, 0, fondo.width, fondo.height); 
    ctxFondo.drawImage(imgShovelKnight, 35, 445); 
 
    idPersonaje = setInterval(moverPersonaje,16);  
    idSprite = setInterval(posicionDelProtagonista, 150);
    idElementoAnimado = setInterval(fuegoHoguera,450);

}

function iniciarNivel1() {

    idContadorSegundos = setInterval(() => {
        segundos++;
    }, 1000);

    audNivel1.currentTime = 0;
    audNivel1.loop = true;
    audNivel1.volume = 0.1;
    audNivel1.play();
    
    ctxFondo.drawImage(imgIntroNivel1, 0, 0, fondo.width, fondo.height);

    plataformas = plataformasNivel1;
    textoShovelKnightMision.imagen = imgTextoShovel;
    textoShovelKnightGracias.imagen = imgGraciasShovel;

    setTimeout(fondoNivel1, 2500);

}

function nivel1() {


    if(protagonista.y - protagonista.tamañoY > 1080) {

        audMuerte.currentTime = 0.31;
        audMuerte.volume = 0.2;
        audMuerte.play();
        setTimeout(() => audMuerte.pause(), 1000);

        contadorDeMuertes++;

        protagonista.x = 120;
        protagonista.y = 896;
        coleccionable1Cogido = false;
        misionNivel1 = false;
        recompensaReclamada1 = false;
        iniciarMision1 = false;
    }

    elemntoAnimado.pintarHoguera();

    if(misionNivel1) {
        ctxFrente.drawImage(imgMision, 0, 0, fondo.width, fondo.height);
        if(colisionCompleta(areaMensajeShovelKnight, protagonista)) {
            recompensaReclamada1 = true;
            misionNivel1 = false;
        }
    }
    if(!iniciarMision1) {
        ctxFrente.drawImage(imgMision, 0, 0, fondo.width, fondo.height);
    }

    if(colisionCompleta(protagonista,areaMensajeShovelKnight) && !mostrandoTexto && !recompensaReclamada1) {
        idIntervaloTextoShovel = setInterval(() => textoShovelKnightMision.letrasTextoMision(), 100)
        mostrandoTexto = true;
        iniciarMision1 = true;
    }

    if(colisionCompleta(protagonista,areaMensajeShovelKnight) && !recompensaReclamada1) {
        textoShovelKnightMision.pintarTextoShovel();
        if (textoShovelKnightMision.cambioDePosicion === 17) {
            clearInterval(idIntervaloTextoShovel);
        }
    } else if (!colisionCompleta(protagonista,areaMensajeShovelKnight) && mostrandoTexto){
        mostrandoTexto = false;
        clearInterval(idIntervaloTextoShovel);
    }

    if (!coleccionable1Cogido) {
        if (!intervaloColeccinable1) { // Solo crea el intervalo si no existe uno activo
            intervaloColeccinable1 = setInterval(coleccionableOscilando, 50);
        }
        ctxFrente.drawImage(imgColeccionable1, 0, posicionY, fondo.width, fondo.height);
        if(colisionCompleta(protagonista,areaColeccinable1)){

            audColeccionable1.currentTime = 5.55;
            audColeccionable1.volume = 0.2;
            audColeccionable1.play();

            coleccionable1Cogido = true;
            misionNivel1 = true;
            mostrandoTexto = false;
            iniciarMision1 = true;
        }
    }

    if(recompensaReclamada1) {
        if(colisionCompleta(protagonista,areaMensajeShovelKnight)) {
            textoShovelKnightGracias.pintarTextoShovel();
            if(textoDeGraciasShovel){
                idIntervaloTextoShovel = setInterval(() => textoShovelKnightGracias.letrasTextoMision(), 100)
                textoDeGraciasShovel = false;
            }
        }

        if (textoShovelKnightGracias.cambioDePosicion === 7 && !graciasDadasShovel) {
            
            clearInterval(idIntervaloTextoShovel);
            graciasDadasShovel = true
            
        }
    }

    if(colisionCompleta(protagonista,areaFinalNivel1)) {
        ctxFrente.drawImage(imgFinDeNivel, 1380, 700,500,50);
    }

    if(colisionCompleta(protagonista,areaFinalNivel1) && terminarNivel) {

        if(coleccionable1Cogido && recompensaReclamada1) {
            puntuacion += 1000;
        } else if (coleccionable1Cogido) {
            puntuacion += 500;
        } else {
            puntuacion += 250;
        }

        audNivel1.pause();

        console.log(puntuacion);
        
        clearInterval(idElementoAnimado);
        clearInterval(intervaloColeccinable1);
        clearInterval(idPersonaje);
        clearInterval(idSprite);

        nivel1Completado = true;
        plataformas = [];
        iniciarNivel2();

        ctxFrente.clearRect(0, 0, 1920, 1080);
        
    }
}