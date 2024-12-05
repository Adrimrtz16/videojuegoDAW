// let idIntervaloTextoMadeline,intervaloColeccinable3,idIntervaloAnimacionMadeline;
let coleccionable3Cogido = false
let misionNivel3 = false;
let recompensaReclamada3 = false;
let mostrandoTexto3 = false;
// let textoDeGraciasMadeline = true
// let graciasDadasMadeline = false;
let iniciarMision3 = false;

// let textoMadelineMision = new BocadilloComic(1650,15,17);
// let textoMadelineGracias = new BocadilloComic(1650,15,8);

let plataformasNivel3 = [

]

pinchos = [

];


// let areaMensajeMadeline = new Plataforma(1600,0,193,356);
// let areaColeccinable3 = new Plataforma(490,80,34*4,16*4);
// let areaFinalNivel3 = new Plataforma(138, 0, 193, 356);

function fondoNivel3(){
    ctxFondo.drawImage(imgFondoNivel3_1, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_2, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_3, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_4, 0, 0, fondo.width, fondo.height);
    ctxFondo.drawImage(imgFondoNivel3_5, 0, 0, fondo.width, fondo.height);
    // pinchos.forEach(pincho => {
    //     ctxFondo.fillRect(pincho.x, pincho.y, pincho.tamañoX, pincho.tamañoY); 
    // });
    

}

function iniciarNivel3() {
    protagonista.x = 130;
    protagonista.y = 896;
    plataformas = plataformasNivel3;
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
