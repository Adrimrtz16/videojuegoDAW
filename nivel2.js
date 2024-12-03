let idIntervaloTextoMadeline,intervaloColeccinable2;
let coleccionable2Cogido = false
let misionNivel2 = false;
let recompensaReclamada2 = false;
let mostrandoTexto2 = false;
let textoDeGraciasMadeline = true
let graciasDadasMadeline = false;
let iniciarMision2 = false;

let plataformasNivel2 = [
    new Plataforma(0, 0, 0, 0),
    new Plataforma(0, 960, 320, 192),
    new Plataforma(640, 960, 384, 192),
    new Plataforma(1280, 832, 192, 64),
    new Plataforma(1600, 640, 192, 64),
    new Plataforma(1600, 448, 192, 64),
    new Plataforma(1600, 256, 192, 64),
    new Plataforma(1024, 128, 192, 64),
    new Plataforma(0, 576, 1280, 128),
    new Plataforma(896, 0, 64, 320),
    new Plataforma(448, 320, 192, 64),
    new Plataforma(128, 256, 192, 64)
]

let pinchos = [
    new Plataforma(735, 940, 200, 50),
    new Plataforma(1050, 675, 200, 50),
    new Plataforma(0, 555, 1255, 50),
    new Plataforma(1779, 655, 50, 30),
    new Plataforma(1562, 463, 50, 30),
    new Plataforma(1779, 271, 50, 30)
];

let fresa = new Fresa();

let areaMensajeMadeline = new Plataforma(1600,0,192,256);
let areaColeccinable2 = new Plataforma(490,80,24*4,16*4);
// let areaFinalNivel1 = new Plataforma(1472, 704, 320, 192);

function Fresa() {
    this.x = 475;
    this.y = 80;
    this.tamañoX = 24;
    this.tamañoY = 16;
    this.posicionFresa = 0;
}

Fresa.prototype.cambiarPosicionFresa = function() {
    this.posicionFresa = (this.posicionFresa + 1) % 48;
}

Fresa.prototype.pintarFresa = function() {
    ctxFrente.imageSmoothingEnabled = false;
    ctxFrente.drawImage(imgFresa[this.posicionFresa], // Imagen completa con todos los comecocos (Sprite)
                        0, 0,                         // Coordenadas de recorte en el sprite
                        this.tamañoX, this.tamañoY,   // Tamaño del recorte
                        this.x, this.y,               // Posición en la pantalla
                        this.tamañoX*6, this.tamañoY*6);  // Tamaño del dibujo
}

function fondoNivel2(){
    ctxFondo.drawImage(imgFondoNivel2, 0, 0, fondo.width+75, fondo.height+75);
    ctxFondo.drawImage(imgPlataformasNivel2, 0, 0, fondo.width, fondo.height);
    // pinchos.forEach(pincho => {
    //     ctxFondo.fillRect(pincho.x, pincho.y, pincho.tamañoX, pincho.tamañoY); 
    // });
}

function iniciarNivel2() {
    protagonista.x = 120;
    protagonista.y = 896;
    plataformas = plataformasNivel2;
    fondoNivel2(); 
}

function nivel2() {

    pinchos.forEach(pincho => {
        pincho.muerte();
    });

    if(protagonista.y - protagonista.tamañoY > 1080) {
        protagonista.x = 120;
        protagonista.y = 896;
        coleccionable2Cogido = false;
        misionNivel2 = false;
        recompensaReclamada2 = false;
        iniciarMision2 = false;
    }

    if(misionNivel2) {
        ctxFrente.drawImage(imgMision, 0, 0, fondo.width, fondo.height);
        if(colisionCompleta(areaMensajeMadeline, protagonista)) {
            recompensaReclamada2 = true;
            misionNivel2 = false;
        }
    }
    if(!iniciarMision2) {
        ctxFrente.drawImage(imgMision, 0, 0, fondo.width, fondo.height);
    }

    if(colisionCompleta(protagonista,areaMensajeMadeline) && !mostrandoTexto2 && !recompensaReclamada2) {
        idIntervaloTextoMadeline = setInterval(() => textoShovelKnightMision.letrasTextoMision(), 100)
        mostrandoTexto2 = true;
        iniciarMision2 = true;
    }

    if(colisionCompleta(protagonista,areaMensajeMadeline) && !recompensaReclamada2) {
        textoShovelKnightMision.pintarTextoShovel();
        if (textoShovelKnightMision.cambioDePosicion === 17) {
            clearInterval(idIntervaloTextoMadeline);
        }
    } else if (!colisionCompleta(protagonista,areaMensajeMadeline) && mostrandoTexto2){
        mostrandoTexto2 = false;
        clearInterval(idIntervaloTextoMadeline);
    }

    if (!coleccionable2Cogido) {
        if (!intervaloColeccinable2) { // Solo crea el intervalo si no existe uno activo
            intervaloColeccinable2 = setInterval(() => fresa.cambiarPosicionFresa(), 75);
        }
        fresa.pintarFresa();
        if(colisionCompleta(protagonista,areaColeccinable2)){
            coleccionable2Cogido = true;
            misionNivel2 = true;
            mostrandoTexto2 = false;
            iniciarMision2 = true;
        }
    }

    if(recompensaReclamada2) {
        if(colisionCompleta(protagonista,areaMensajeMadeline)) {
            textoShovelKnightGracias.pintarTextoShovel();
            if(textoDeGraciasMadeline){
                idIntervaloTextoMadeline = setInterval(() => textoShovelKnightGracias.letrasTextoMision(), 100)
                textoDeGraciasMadeline = false;
            }
        }

        if (textoShovelKnightGracias.cambioDePosicion === 7 && !graciasDadasMadeline) {
            
            clearInterval(idIntervaloTextoMadeline);
            graciasDadasMadeline = true
            
        }
    }

    if(colisionCompleta(protagonista,areaFinalNivel1) && terminarNivel) {
        clearInterval(idElementoAnimado);
        nivel1Completado = true;
        plataformas = [];
        iniciarNivel2();
    }
}
