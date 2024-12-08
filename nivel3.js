// let idIntervaloTextoMadeline,intervaloColeccinable3,idIntervaloAnimacionMadeline;
let coleccionable3Cogido = false
let misionNivel3 = false;
let recompensaReclamada3 = false;
let mostrandoTexto3 = false;
// let textoDeGraciasMadeline = true
// let graciasDadasMadeline = false;
let iniciarMision3 = false;
let intervaloColeccinable3;
let idMoverPlataforma1,idMoverPlataforma2,idMoverPlataforma3;
// let textoMadelineMision = new BocadilloComic(1650,15,17);
// let textoMadelineGracias = new BocadilloComic(1650,15,8);

let plataformasNivel3 = [
    new Plataforma(0, 0, 0, 0),
    new Plataforma(0, 960, 512, 192),
    new Plataforma(640, 960, 192, 64, 1152),
    new Plataforma(1536, 960, 192, 64, 704),
    new Plataforma(0, 704, 1536, 64),
    new Plataforma(320, 320, 1600, 64),
    new Plataforma(1472, 640, 64, 64),
    new Plataforma(1088, 640, 64, 64),
    new Plataforma(320, 640, 64, 64),
    new Plataforma(704, 640, 64, 64),
    new Plataforma(0, 640 , 320, 64, 320),
    new Plataforma(320, -200, 64, 328),
    new Plataforma(704, -200, 64, 200),
    new Plataforma(1088, -200, 64, 264),
    new Plataforma(1472, -192, 64, 192),
    new Plataforma(320, 256, 64, 192),
    new Plataforma(704, 128, 64, 320),
    new Plataforma(1088, 192, 64, 256),
    new Plataforma(1472, 64, 64, 384),
]

// let areaMensajeMadeline = new Plataforma(1600,0,193,356);
let areaColeccinable3 = new Plataforma(490,80,34*4,16*4);
let areaFinalNivel3 = new Plataforma(138, 0, 193, 356);

function fondoNivel3(){
    ctxFondo.drawImage(imgFondoNivel3_1, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_2, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_3, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_4, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_5, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgPlataformasNivel3, 0, 0, fondo.width, fondo.height);
    // pinchos.forEach(pincho => {
    //     ctxFondo.fillRect(pincho.x, pincho.y, pincho.tamañoX, pincho.tamañoY); 
    // });
    
}

function iniciarNivel3() {
    protagonista.x = 130;
    protagonista.y = 896;
    plataformas = plataformasNivel3;

    idMoverPlataforma1 = setInterval(() => plataformas[2].moverEnX(640), 1)
    idMoverPlataforma2 = setInterval(() => plataformas[3].moverEnY(960), 1)
    idMoverPlataforma3 = setInterval(() => plataformas[10].moverEnY(640), 1)

    fondoNivel3(); 
}

function nivel3() {

    if(protagonista.y - protagonista.tamañoY > 1080) {
        protagonista.x = 130;
        protagonista.y = 896;
        coleccionable3Cogido = false;
        misionNivel3 = false;
        recompensaReclamada3 = false;
        iniciarMision3 = false;
    }
    ctxFrente.drawImage(imgNube, plataformasNivel3[2].x-40, plataformasNivel3[2].y - 50, plataformasNivel3[2].tamañoX +80, plataformasNivel3[2].tamañoY + 60); 
    ctxFrente.drawImage(imgNube, plataformasNivel3[3].x -40, plataformasNivel3[3].y- 50, plataformasNivel3[3].tamañoX +80, plataformasNivel3[3].tamañoY + 60); 
    ctxFrente.drawImage(imgNube, plataformasNivel3[10].x -40, plataformasNivel3[10].y- 50, plataformasNivel3[10].tamañoX +80, plataformasNivel3[10].tamañoY + 100); 

    if(misionNivel3) {
        ctxFrente.drawImage(imgMision, 1618, -360, fondo.width, fondo.height);
        if(colisionCompleta(areaMensajeMadeline, protagonista)) {
            recompensaReclamada3 = true;
            misionNivel3 = false;
        }
    }

    if(!iniciarMision3) {
        ctxFrente.drawImage(imgMision, 1618, -360, fondo.width, fondo.height);
    }

    if(colisionCompleta(protagonista,areaMensajeMadeline) && !mostrandoTexto3 && !recompensaReclamada3) {
        idIntervaloTextoMadeline = setInterval(() => textoMadelineMision.letrasTextoMision(), 100)
        mostrandoTexto3 = true;
        iniciarMision3 = true;
    }

    if(colisionCompleta(protagonista,areaMensajeMadeline) && !recompensaReclamada3) {
        textoMadelineMision.pintarTextoShovel();
        if (textoMadelineMision.cambioDePosicion === 16) {
            clearInterval(idIntervaloTextoMadeline);
        }
    } else if (!colisionCompleta(protagonista,areaMensajeMadeline) && mostrandoTexto3){
        mostrandoTexto3 = false;
        clearInterval(idIntervaloTextoMadeline);
    }

    if (!coleccionable3Cogido) {
        if (!intervaloColeccinable3) { // Solo crea el intervalo si no existe uno activo
            intervaloColeccinable3 = setInterval(() => fresa.cambiarPosicionFresa(), 75);
        }
        fresa.pintarFresa();
        if(colisionCompleta(protagonista,areaColeccinable3)){
            coleccionable3Cogido = true;
            misionNivel3 = true;
            mostrandoTexto3 = false;
            iniciarMision3 = true;
        }
    }

    if(recompensaReclamada3) {
        if(colisionCompleta(protagonista,areaMensajeMadeline)) {
            textoMadelineGracias.pintarTextoShovel();
            if(textoDeGraciasMadeline){
                idIntervaloTextoMadeline = setInterval(() => textoMadelineGracias.letrasTextoMision(), 100)
                textoDeGraciasMadeline = false;
            }
        }

        if (textoMadelineGracias.cambioDePosicion === 7 && !graciasDadasMadeline) {
            
            clearInterval(idIntervaloTextoMadeline);
            graciasDadasMadeline = true
            
        }
    }

    if(colisionCompleta(protagonista,areaFinalNivel3) && terminarNivel) {
        clearInterval(idElementoAnimado);
        nivel3Completado = true;
        plataformas = [];
        iniciarNivel3();
        
    }
}
